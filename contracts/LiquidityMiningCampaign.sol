// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "openzeppelin-solidity/contracts/math/Math.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/IERC20Detailed.sol";
import "./SafeERC20Detailed.sol";
import "./RewardsPoolBase.sol";
import "./LockScheme.sol";
import "./StakeTransferer.sol";
import "./StakeReceiver.sol";
import "./pool-features/OnlyExitFeature.sol";


contract LiquidityMiningCampaign is StakeTransferer, OnlyExitFeature {
	using SafeMath for uint256;
	using SafeERC20Detailed for IERC20Detailed;

	address[] lockSchemes;
	address rewardToken;
	mapping(address => uint256) public userAccruedRewads;

	event StakedAndLocked(address indexed _userAddress, uint256 _tokenAmount, address _lockScheme);
	event ExitedAndUnlocked(address indexed _userAddress);
	event BonusTransferred(address indexed _userAddress, uint256 _bonusAmount);

		constructor(
		IERC20Detailed _stakingToken,
		uint256 _startBlock,
		uint256 _endBlock,
		address[] memory _rewardsTokens,
		uint256[] memory _rewardPerBlock,
		uint256 _stakeLimit
	) public RewardsPoolBase(_stakingToken, _startBlock, _endBlock, _rewardsTokens, _rewardPerBlock,_stakeLimit) {

		rewardToken = _rewardsTokens[0];
	}

	function  stakeAndLock( uint256 _tokenAmount, address _lockScheme) external{
		_stakeAndLock(msg.sender,_tokenAmount, _lockScheme);

	}

	function _stakeAndLock(address _userAddress ,uint256 _tokenAmount, address _lockScheme) internal nonReentrant {
		require(_tokenAmount > 0, "stakeAndLock::Cannot stake 0");

		UserInfo storage user = userInfo[_userAddress];

		uint256 userRewards = 0;

		updateRewardMultipliers();
		updateUserAccruedReward(_userAddress);

		userRewards = user.tokensOwed[0];

		for (uint256 i = 0; i < lockSchemes.length; i++) {

			uint256 additionalRewards = calculateProportionalRewards(_userAddress, userRewards.sub(userAccruedRewads[_userAddress]), lockSchemes[i]);
			LockScheme(lockSchemes[i]).updateUserAccruedRewards(_userAddress, additionalRewards);
		}
		userAccruedRewads[_userAddress]	= userRewards;
		_stake(_tokenAmount, _userAddress, false);

		LockScheme(_lockScheme).lock(_userAddress, _tokenAmount);

		emit StakedAndLocked( _userAddress, _tokenAmount, _lockScheme);
	}

	function exitAndUnlock() public nonReentrant {
			_exitAndUnlock(msg.sender);
	}

	function _exitAndUnlock(address _userAddress) internal {
			UserInfo storage user = userInfo[_userAddress];

			if (user.amountStaked == 0) {
				return;
			}

			updateRewardMultipliers();
			updateUserAccruedReward(_userAddress);
			//todo check how to secure that 0 is the albt
			uint256 finalRewards = user.tokensOwed[0].sub(userAccruedRewads[_userAddress]);
		
			for (uint256 i = 0; i < lockSchemes.length; i++) {

				uint256 additionalRewards = calculateProportionalRewards(_userAddress, finalRewards, lockSchemes[i]);
				if(additionalRewards > 0) {

				LockScheme(lockSchemes[i]).updateUserAccruedRewards(_userAddress, additionalRewards);
				}

				uint256 bonus = LockScheme(lockSchemes[i]).exit(_userAddress);
				IERC20Detailed(rewardToken).safeTransfer(_userAddress, bonus);
				
			}
			_exit(_userAddress);
			userAccruedRewads[_userAddress] = 0;

			emit ExitedAndUnlocked(_userAddress);
	}


	function setReceiverWhitelisted(address receiver, bool whitelisted) override(StakeTransferer) onlyFactory public {
		StakeTransferer.setReceiverWhitelisted(receiver, whitelisted);
	}

	/** @dev exits the current campaign and migrates the stake to another whitelisted campaign
	@param _migrateTo address of the receiver to transfer the stake to
	 */
	function exitAndMigrate(address _migrateTo, address _stakingToken) public {
		_exitAndMigrate(_migrateTo, msg.sender, _stakingToken);
	}

	function _exitAndMigrate(address _migrateTo, address _userAddress, address _stakingToken) internal onlyWhitelistedReceiver(_migrateTo) nonReentrant {
		UserInfo storage user = userInfo[_userAddress];
		
		if (user.amountStaked == 0) {
			return;
		}

		updateRewardMultipliers();
		updateUserAccruedReward(_userAddress); // Update the accrued reward for this specific user

		uint256 finalRewards = user.tokensOwed[0].sub(userAccruedRewads[_userAddress]);

		for (uint256 i = 0; i < lockSchemes.length; i++) {

			uint256 additionalRewards = calculateProportionalRewards(_userAddress, finalRewards, lockSchemes[i]);

			if(additionalRewards > 0) {
			LockScheme(lockSchemes[i]).updateUserAccruedRewards(_userAddress, additionalRewards);
			}
		
			uint256 bonus = LockScheme(lockSchemes[i]).exit(_userAddress);
			IERC20Detailed(rewardToken).safeTransfer(_userAddress, bonus);
				
		}

		_claim(_userAddress);
		// stakingToken.safeApprove(_migrateTo, user.amountStaked);
		IERC20Detailed(_stakingToken).safeApprove(_migrateTo, user.amountStaked);
		StakeReceiver(_migrateTo).delegateStake(_userAddress, user.amountStaked);

		totalStaked = totalStaked.sub(user.amountStaked);
		user.amountStaked = 0;

		for (uint256 i = 0; i < rewardsTokens.length; i++) {
			user.tokensOwed[i] = 0;
			user.rewardDebt[i] = 0;
		}
		userAccruedRewads[_userAddress] = 0;
	}

	function exitAndStake(address _stakePool) public  {

			_exitAndStake(msg.sender, _stakePool);
	}

	function _exitAndStake(address _userAddress,address _stakePool) internal onlyWhitelistedReceiver(_stakePool) {
			
		UserInfo storage user = userInfo[_userAddress];
		
		if (user.amountStaked == 0) {
			return;
		}

		updateRewardMultipliers();
		updateUserAccruedReward(_userAddress);
			//todo check how to secure that 0 is the albt
			uint256 finalRewards = user.tokensOwed[0].sub(userAccruedRewads[_userAddress]);
			uint256 userBonus;
			uint256 amountToStake;
			for (uint256 i = 0; i < lockSchemes.length; i++) {

				uint256 additionalRewards = calculateProportionalRewards(_userAddress, finalRewards, lockSchemes[i]);
				if(additionalRewards > 0) {

				LockScheme(lockSchemes[i]).updateUserAccruedRewards(_userAddress, additionalRewards);
				}
				userBonus = LockScheme(lockSchemes[i]).exit(_userAddress);
				amountToStake = amountToStake.add(userBonus);
			}

		 amountToStake = amountToStake.add(user.tokensOwed[0]);
		_withdraw(user.amountStaked, _userAddress);
		user.tokensOwed[0] = 0;
		_claim(_userAddress);

		IERC20Detailed(rewardToken).safeApprove(_stakePool, amountToStake);
		StakeReceiver(_stakePool).delegateStake(_userAddress, amountToStake);
		userAccruedRewads[_userAddress] = 0;
	}


	function exit() public override {
		_exitAndUnlock(msg.sender);
	}

	// function stake() public override {
	// 	revert("stake:cannot stake from this contract. Only stake and lock.");
	// }

	function calculateProportionalRewards(address _userAddress, uint256 _accruedRewards, address _lockScheme) internal returns (uint256) {
			
			uint256 userLockedStake = LockScheme(_lockScheme).getUserLockedStake(_userAddress);

			if(totalStaked > 0) {
				return _accruedRewards.mul(userLockedStake).div(totalStaked);
			}
			return 0;
			
	}

	function setLockSchemes(address[] memory _lockSchemes) public {
		lockSchemes = _lockSchemes;
	}

}