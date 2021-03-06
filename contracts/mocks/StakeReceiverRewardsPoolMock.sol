// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./../pool-features/StakeReceiverFeature.sol";
import "./OnlyExitRewardsPoolMock.sol";

contract StakeReceiverRewardsPoolMock is OnlyExitRewardsPoolMock, StakeReceiverFeature {
	constructor(
        IERC20Detailed _stakingToken,
        uint256 _startBlock,
        uint256 _endBlock,
        address[] memory _rewardsTokens,
        uint256[] memory _rewardPerBlock,
		uint256 _stakeLimit,
		uint256 _contractStakeLimit
    ) public OnlyExitRewardsPoolMock(_stakingToken, _startBlock, _endBlock, _rewardsTokens, _rewardPerBlock, _stakeLimit, _contractStakeLimit) {

	}

    function withdraw(uint256 _tokenAmount) public override(OnlyExitRewardsPoolMock, RewardsPoolBase) {
		OnlyExitRewardsPoolMock.withdraw(_tokenAmount);
	}

	function claim() public override(OnlyExitRewardsPoolMock, RewardsPoolBase) {
		OnlyExitRewardsPoolMock.claim();
	}
}