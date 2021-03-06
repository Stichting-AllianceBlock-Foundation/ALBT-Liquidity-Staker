// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./interfaces/IRewardsPoolBase.sol";
import "./SafeERC20Detailed.sol";
import "./interfaces/IERC20Detailed.sol";

abstract contract AbstractPoolsFactory {
	using SafeMath for uint256;
	using SafeERC20Detailed for IERC20Detailed;

	/** @dev all rewards pools
	 */
	address[] public rewardsPools;
	address public owner;
	address internal pendingOwner;

	event OwnershipTransferProposed(address indexed _oldOwner, address indexed _newOwner);
	event OwnershipTransferred(address indexed _newOwner);
	event RewardsWithdrawn(address rewardsToken, uint256 amount);

	constructor() public {
		owner = msg.sender;
	}

	modifier onlyOwner() {
		require(msg.sender == owner, "onlyOwner:: The caller is not the owner");
		_;
	}

	function transferOwnership(address newOwner) public onlyOwner {
		require(newOwner != address(0x0), "Cannot set owner to 0 address");
		pendingOwner = newOwner;
		emit OwnershipTransferProposed(msg.sender, owner);
	}

	function acceptOwnership() public {
		require(msg.sender == pendingOwner, "Sender is different from proposed owner");

		owner = pendingOwner;
		emit OwnershipTransferred(owner);
	}

	/** @dev Returns the total number of rewards pools.
	 */
	function getRewardsPoolNumber() public view returns (uint256) {
		return rewardsPools.length;
	}

	/** @dev Helper function to calculate how much tokens should be transffered to a rewards pool.
	 */
	function calculateRewardsAmount(
		uint256 _startBlock,
		uint256 _endBlock,
		uint256 _rewardPerBlock
	) public pure returns (uint256) {
		require(
			_rewardPerBlock > 0,
			"calculateRewardsAmount:: Rewards per block must be greater than zero"
		);

		uint256 rewardsPeriod = _endBlock.sub(_startBlock);

		return _rewardPerBlock.mul(rewardsPeriod);
	}

	/** @dev Triggers the withdrawal of LP rewards from the rewards pool contract to the given recipient address
	 * @param rewardsPoolAddress The address of the token being staked
	 * @param recipient The address to whom the rewards will be trasferred
	 * @param lpTokenContract The address of the rewards contract
	 */
	function withdrawLPRewards(
		address rewardsPoolAddress,
		address recipient,
		address lpTokenContract
	) external onlyOwner {
		require(
			rewardsPoolAddress != address(0),
			"startStaking:: not deployed"
		);
		IRewardsPoolBase pool = IRewardsPoolBase(rewardsPoolAddress);
		pool.withdrawLPRewards(recipient, lpTokenContract);
	}

	/** @dev Function to withdraw any rewards leftover, mainly from extend with lower rate.
	 * @param _rewardsToken The address of the rewards to be withdrawn.
	 */
	function withdrawRewardsLeftovers(address _rewardsToken) external onlyOwner {

		uint256 contractBalance = IERC20Detailed(_rewardsToken).balanceOf(address(this));
		IERC20Detailed(_rewardsToken).safeTransfer(msg.sender,contractBalance );

		emit RewardsWithdrawn(_rewardsToken,contractBalance);
	}
}
