// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./../RewardsPoolBase.sol";
import "./../pool-features/OneStakerFeature.sol";
import "./../pool-features/TreasuryOperatedFeature.sol";

contract CompoundingRewardsPool is RewardsPoolBase, OneStakerFeature, TreasuryOperatedFeature {
	constructor(
		IERC20Detailed _stakingToken,
		uint256 _startBlock,
		uint256 _endBlock,
		address[] memory _rewardsTokens,
		uint256[] memory _rewardPerBlock,
		uint256 _stakeLimit,
		address _staker,
		address _treasury,
		address _externalRewardToken,
		uint256 _contractStakeLimit
	) public RewardsPoolBase(_stakingToken, _startBlock, _endBlock, _rewardsTokens, _rewardPerBlock, _stakeLimit, _contractStakeLimit) OneStakerFeature(_staker) TreasuryOperatedFeature(_externalRewardToken, _treasury) {
	}

	function stake(uint256 _tokenAmount) public override(RewardsPoolBase, OneStakerFeature) {
		OneStakerFeature.stake(_tokenAmount);
	}
}