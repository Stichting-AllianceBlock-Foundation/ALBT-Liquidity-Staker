// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "openzeppelin-solidity/contracts/math/Math.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "./interfaces/IERC20Detailed.sol";
import "./SafeERC20Detailed.sol";
import "./RewardsPoolBase.sol";
import "./AbstractPoolsFactory.sol";

contract RewardsPoolFactory is AbstractPoolsFactory {
	using SafeMath for uint256;
	using SafeERC20Detailed for IERC20Detailed;

	event RewardsPoolDeployed(
		address indexed rewardsPoolAddress,
		address indexed stakingToken
	);

	/* ========== Permissioned FUNCTIONS ========== */

	/** @dev Deploy a reward pool base contract for the staking token, with the given parameters.
	 * @param _stakingToken The address of the token being staked
	 * @param _startBlock The start block of the rewards pool
	 * @param _endBlock The end block of the rewards pool
	 * @param _rewardsTokens The addresses of the tokens the rewards will be paid in
	 * @param _rewardPerBlock Rewards per block
	 * @param _stakeLimit The stake limit per user
	 */
	function deploy(
		address _stakingToken,
		uint256 _startBlock,
		uint256 _endBlock,
		address[] calldata _rewardsTokens,
		uint256[] calldata _rewardPerBlock,
		uint256 _stakeLimit,
		uint256 _contractStakeLimit
	) external onlyOwner {
		require(
			_stakingToken != address(0),
			"RewardsPoolFactory::deploy: Staking token address can't be zero address"
		);
		require(
			_rewardsTokens.length != 0,
			"RewardsPoolFactory::deploy: RewardsTokens array could not be empty"
		);
		require(
			_rewardsTokens.length == _rewardPerBlock.length,
			"RewardsPoolFactory::deploy: RewardsTokens and RewardPerBlock should have a matching sizes"
		);

		require(
			_stakeLimit != 0,
			"RewardsPoolFactory::deploy: Stake limit must be more than 0"
		);

		address rewardsPoolBase =
			address(
				new RewardsPoolBase(
					IERC20Detailed(_stakingToken),
					_startBlock,
					_endBlock,
					_rewardsTokens,
					_rewardPerBlock,
					_stakeLimit,
					_contractStakeLimit
				)
			);

		for (uint256 i = 0; i < _rewardsTokens.length; i++) {
			require(
				_rewardsTokens[i] != address(0),
				"RewardsPoolFactory::deploy: Reward token address could not be invalid"
			);
			require(
				_rewardPerBlock[i] != 0,
				"RewardsPoolFactory::deploy: Reward per block must be greater than zero"
			);

			uint256 rewardsAmount =
				calculateRewardsAmount(
					_startBlock,
					_endBlock,
					_rewardPerBlock[i]
				);
			IERC20Detailed(_rewardsTokens[i]).safeTransfer(
				rewardsPoolBase,
				rewardsAmount
			);
		}
		rewardsPools.push(rewardsPoolBase);

		emit RewardsPoolDeployed(rewardsPoolBase, _stakingToken);
	}

	/** @dev Function that will extend the rewards period, but not change the reward rate, for a given staking contract.
	 * @param _endBlock The new endblock for the rewards pool.
	 * @param _rewardsPerBlock Rewards per block .
	 * @param _rewardsPoolAddress The address of the RewardsPoolBase contract.
	 */
	function extendRewardPool(
		uint256 _endBlock,
		uint256[] memory _rewardsPerBlock,
		address _rewardsPoolAddress
	) external onlyOwner {

		RewardsPoolBase pool = RewardsPoolBase(_rewardsPoolAddress);
		uint256 currentEndBlock = pool.endBlock();
		uint256[] memory currentRemainingRewards = new uint256[](_rewardsPerBlock.length);
		uint256[] memory newRemainingRewards = new uint256[](_rewardsPerBlock.length);

		for (uint256 i = 0; i < _rewardsPerBlock.length; i++) {

			currentRemainingRewards[i] = calculateRewardsAmount(block.number, currentEndBlock, pool.rewardPerBlock(i));
			newRemainingRewards[i] = calculateRewardsAmount(block.number, _endBlock, _rewardsPerBlock[i]);

			address rewardsToken = RewardsPoolBase(_rewardsPoolAddress).rewardsTokens(i);

			if (newRemainingRewards[i] > currentRemainingRewards[i]) {
				// Some more reward needs to be transferred to the rewards pool contract
				IERC20Detailed(rewardsToken).safeTransfer(_rewardsPoolAddress, (newRemainingRewards[i] - currentRemainingRewards[i]));
			}
		}

		RewardsPoolBase(_rewardsPoolAddress).extend(
			_endBlock,
			_rewardsPerBlock,
			currentRemainingRewards,
			newRemainingRewards
		);

	}

}
