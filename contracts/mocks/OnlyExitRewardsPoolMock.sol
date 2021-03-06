// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./../RewardsPoolBase.sol";
import "./../pool-features/OnlyExitFeature.sol";

contract OnlyExitRewardsPoolMock is RewardsPoolBase, OnlyExitFeature {
	constructor(
        IERC20Detailed _stakingToken,
        uint256 _startBlock,
        uint256 _endBlock,
        address[] memory _rewardsTokens,
        uint256[] memory _rewardPerBlock,
		uint256 _stakeLimit,
		uint256 _contractStakeLimit
    ) public RewardsPoolBase(_stakingToken, _startBlock, _endBlock, _rewardsTokens, _rewardPerBlock, _stakeLimit,_contractStakeLimit) {

	}

	function withdraw(uint256 _tokenAmount) public virtual override(OnlyExitFeature, RewardsPoolBase) {
		OnlyExitFeature.withdraw(_tokenAmount);
	}

	function claim() public virtual override(OnlyExitFeature, RewardsPoolBase) {
		OnlyExitFeature.claim();
	}
}