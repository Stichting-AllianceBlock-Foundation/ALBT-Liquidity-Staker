// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "openzeppelin-solidity/contracts/math/Math.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./interfaces/IERC20Detailed.sol";
import "./SafeERC20Detailed.sol";
import "./AbstractPoolsFactory.sol";
import "./V2/factories/StakeTransferEnabledFactory.sol";
import "./LiquidityMiningCampaign.sol";


contract LiquidityMiningCampaignFactory is AbstractPoolsFactory, StakeTransferEnabledFactory {


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
		address _albtAddress,
		uint256 _stakeLimit,
		uint256 _contractStakeLimit
	) external onlyOwner {
		require(
			_stakingToken != address(0),
			"LiquidityMiningCampaignFactory::deploy: Staking token address can't be zero address"
		);
		require(
			_rewardsTokens.length != 0,
			"LiquidityMiningCampaignFactory::deploy: RewardsTokens array could not be empty"
		);
		require(
			_rewardsTokens.length == _rewardPerBlock.length,
			"LiquidityMiningCampaignFactory::deploy: RewardsTokens and RewardPerBlock should have a matching sizes"
		);

		require(
			_stakeLimit != 0,
			"LiquidityMiningCampaignFactory::deploy: Stake limit must be more than 0"
		);

		address rewardsPoolBase =
			address(
				new LiquidityMiningCampaign(
					IERC20Detailed(_stakingToken),
					_startBlock,
					_endBlock,
					_rewardsTokens,
					_rewardPerBlock,
					_albtAddress,
					_stakeLimit,
					_contractStakeLimit
				)
			);

		for (uint256 i = 0; i < _rewardsTokens.length; i++) {

			require(
				_rewardsTokens[i] != address(0),
				"LiquidityMiningCampaignFactory::deploy: Reward token address could not be invalid"
			);
			require(
				_rewardPerBlock[i] != 0,
				"LiquidityMiningCampaignFactory::deploy: Reward per block must be greater than zero"
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
		uint256[] calldata _rewardsPerBlock,
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

	function setLockSchemesToLMC(address[] memory _lockSchemes, address _rewardsPoolAddress) external onlyOwner() {
		require(_rewardsPoolAddress != address(0x0), "setLockSchemesToLMC:: Invalid LMC address");
		require(_lockSchemes.length != 0, "setLockSchemesToLMC:: LockSchemes array can't be empty");
		LiquidityMiningCampaign pool = LiquidityMiningCampaign(_rewardsPoolAddress);

		pool.setLockSchemes(_lockSchemes);
	}

}