/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IRewardsPoolBaseInterface extends ethers.utils.Interface {
  functions: {
    "getUserRewardDebt(address,uint256)": FunctionFragment;
    "getUserOwedTokens(address,uint256)": FunctionFragment;
    "getUserAccumulatedReward(address,uint256)": FunctionFragment;
    "getUserTokensOwedLength(address)": FunctionFragment;
    "getUserRewardDebtLength(address)": FunctionFragment;
    "calculateRewardsAmount(uint256,uint256,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "stakingToken()": FunctionFragment;
    "updateRewardMultipliers()": FunctionFragment;
    "initialiseUserTokensOwed(address)": FunctionFragment;
    "updateUserAccruedReward(address)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "claim()": FunctionFragment;
    "exit()": FunctionFragment;
    "extend(uint256,uint256[])": FunctionFragment;
    "withdrawLPRewards(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getUserRewardDebt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserOwedTokens",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAccumulatedReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserTokensOwedLength",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserRewardDebtLength",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRewardsAmount",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewardMultipliers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialiseUserTokensOwed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateUserAccruedReward",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "extend",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLPRewards",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getUserRewardDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserOwedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAccumulatedReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserTokensOwedLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserRewardDebtLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRewardsAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewardMultipliers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialiseUserTokensOwed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUserAccruedReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "extend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLPRewards",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRewardsPoolBase extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IRewardsPoolBaseInterface;

  functions: {
    getUserRewardDebt(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "getUserRewardDebt(address,uint256)"(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    getUserOwedTokens(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "getUserOwedTokens(address,uint256)"(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    getUserAccumulatedReward(
      _userAddress: string,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getUserAccumulatedReward(address,uint256)"(
      _userAddress: string,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserTokensOwedLength(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getUserTokensOwedLength(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserRewardDebtLength(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getUserRewardDebtLength(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateRewardsAmount(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "calculateRewardsAmount(uint256,uint256,uint256)"(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOf(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    "stakingToken()"(overrides?: CallOverrides): Promise<[string]>;

    updateRewardMultipliers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateRewardMultipliers()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialiseUserTokensOwed(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialiseUserTokensOwed(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateUserAccruedReward(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateUserAccruedReward(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "stake(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claim()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "exit()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    extend(
      _endBlock: BigNumberish,
      _rewardsPerBlock: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "extend(uint256,uint256[])"(
      _endBlock: BigNumberish,
      _rewardsPerBlock: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawLPRewards(
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawLPRewards(address,address)"(
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getUserRewardDebt(
    _userAddress: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "getUserRewardDebt(address,uint256)"(
    _userAddress: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  getUserOwedTokens(
    _userAddress: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "getUserOwedTokens(address,uint256)"(
    _userAddress: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  getUserAccumulatedReward(
    _userAddress: string,
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getUserAccumulatedReward(address,uint256)"(
    _userAddress: string,
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserTokensOwedLength(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getUserTokensOwedLength(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserRewardDebtLength(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getUserRewardDebtLength(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateRewardsAmount(
    _startBlock: BigNumberish,
    _endBlock: BigNumberish,
    _rewardPerBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calculateRewardsAmount(uint256,uint256,uint256)"(
    _startBlock: BigNumberish,
    _endBlock: BigNumberish,
    _rewardPerBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOf(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  "stakingToken()"(overrides?: CallOverrides): Promise<string>;

  updateRewardMultipliers(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateRewardMultipliers()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialiseUserTokensOwed(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialiseUserTokensOwed(address)"(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateUserAccruedReward(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateUserAccruedReward(address)"(
    _userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "stake(uint256)"(
    _tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    _tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claim()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "exit()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  extend(
    _endBlock: BigNumberish,
    _rewardsPerBlock: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "extend(uint256,uint256[])"(
    _endBlock: BigNumberish,
    _rewardsPerBlock: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawLPRewards(
    recipient: string,
    lpTokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawLPRewards(address,address)"(
    recipient: string,
    lpTokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getUserRewardDebt(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "getUserRewardDebt(address,uint256)"(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getUserOwedTokens(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "getUserOwedTokens(address,uint256)"(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getUserAccumulatedReward(
      _userAddress: string,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserAccumulatedReward(address,uint256)"(
      _userAddress: string,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserTokensOwedLength(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserTokensOwedLength(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserRewardDebtLength(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserRewardDebtLength(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRewardsAmount(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateRewardsAmount(uint256,uint256,uint256)"(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    "stakingToken()"(overrides?: CallOverrides): Promise<string>;

    updateRewardMultipliers(overrides?: CallOverrides): Promise<void>;

    "updateRewardMultipliers()"(overrides?: CallOverrides): Promise<void>;

    initialiseUserTokensOwed(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialiseUserTokensOwed(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateUserAccruedReward(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateUserAccruedReward(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(_tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "stake(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    exit(overrides?: CallOverrides): Promise<void>;

    "exit()"(overrides?: CallOverrides): Promise<void>;

    extend(
      _endBlock: BigNumberish,
      _rewardsPerBlock: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "extend(uint256,uint256[])"(
      _endBlock: BigNumberish,
      _rewardsPerBlock: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawLPRewards(
      recipient: string,
      lpTokenContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawLPRewards(address,address)"(
      recipient: string,
      lpTokenContract: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getUserRewardDebt(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserRewardDebt(address,uint256)"(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserOwedTokens(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserOwedTokens(address,uint256)"(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAccumulatedReward(
      _userAddress: string,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserAccumulatedReward(address,uint256)"(
      _userAddress: string,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserTokensOwedLength(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserTokensOwedLength(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserRewardDebtLength(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserRewardDebtLength(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRewardsAmount(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateRewardsAmount(uint256,uint256,uint256)"(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    "stakingToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateRewardMultipliers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateRewardMultipliers()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialiseUserTokensOwed(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialiseUserTokensOwed(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateUserAccruedReward(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateUserAccruedReward(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "stake(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claim()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "exit()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    extend(
      _endBlock: BigNumberish,
      _rewardsPerBlock: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "extend(uint256,uint256[])"(
      _endBlock: BigNumberish,
      _rewardsPerBlock: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawLPRewards(
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawLPRewards(address,address)"(
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getUserRewardDebt(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserRewardDebt(address,uint256)"(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserOwedTokens(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserOwedTokens(address,uint256)"(
      _userAddress: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserAccumulatedReward(
      _userAddress: string,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserAccumulatedReward(address,uint256)"(
      _userAddress: string,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserTokensOwedLength(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserTokensOwedLength(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserRewardDebtLength(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserRewardDebtLength(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateRewardsAmount(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateRewardsAmount(uint256,uint256,uint256)"(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _rewardPerBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stakingToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateRewardMultipliers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateRewardMultipliers()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialiseUserTokensOwed(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialiseUserTokensOwed(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateUserAccruedReward(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateUserAccruedReward(address)"(
      _userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "stake(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      _tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claim()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "exit()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    extend(
      _endBlock: BigNumberish,
      _rewardsPerBlock: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "extend(uint256,uint256[])"(
      _endBlock: BigNumberish,
      _rewardsPerBlock: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawLPRewards(
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawLPRewards(address,address)"(
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
