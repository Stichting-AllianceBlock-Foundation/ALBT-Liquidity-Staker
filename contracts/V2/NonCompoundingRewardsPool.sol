// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./../RewardsPoolBase.sol";
import "./../pool-features/OnlyExitFeature.sol";
import "./../pool-features/ThrottledExitFeature.sol";
import "./../pool-features/StakeTransfererFeature.sol";
import "./../pool-features/StakeReceiverFeature.sol";

contract NonCompoundingRewardsPool is RewardsPoolBase, OnlyExitFeature, ThrottledExitFeature, StakeTransfererFeature, StakeReceiverFeature {
	constructor(
        IERC20Detailed _stakingToken,
        uint256 _startBlock,
        uint256 _endBlock,
        address[] memory _rewardsTokens,
        uint256[] memory _rewardPerBlock,
		uint256 _stakeLimit,
		uint256 throttleRoundBlocks,
		uint256 throttleRoundCap
    ) public RewardsPoolBase(_stakingToken, _startBlock, _endBlock, _rewardsTokens, _rewardPerBlock, _stakeLimit) {
		setLockEnd(_endBlock);
		setThrottleParams(throttleRoundBlocks, throttleRoundCap, _endBlock);
	}

	function withdraw(uint256 _tokenAmount) public override(OnlyExitFeature, RewardsPoolBase) {
		OnlyExitFeature.withdraw(_tokenAmount);
	}

	function claim() public override(OnlyExitFeature, RewardsPoolBase) {
		OnlyExitFeature.claim();
	}

	function exit() public override(ThrottledExitFeature, RewardsPoolBase) {
		ThrottledExitFeature.exit();
	}
}