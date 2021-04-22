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

interface AbstractPoolsFactoryInterface extends ethers.utils.Interface {
  functions: {
    "owner()": FunctionFragment;
    "rewardsPools(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "acceptOwnership()": FunctionFragment;
    "getRewardsPoolNumber()": FunctionFragment;
    "calculateRewardsAmount(uint256,uint256,uint256)": FunctionFragment;
    "withdrawLPRewards(address,address,address)": FunctionFragment;
    "withdrawRewardsLeftovers(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardsPools",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsPoolNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRewardsAmount",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLPRewards",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRewardsLeftovers",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardsPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsPoolNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRewardsAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLPRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRewardsLeftovers",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferProposed(address,address)": EventFragment;
    "OwnershipTransferred(address)": EventFragment;
    "RewardsWithdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsWithdrawn"): EventFragment;
}

export class AbstractPoolsFactory extends Contract {
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

  interface: AbstractPoolsFactoryInterface;

  functions: {
    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    rewardsPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "rewardsPools(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRewardsPoolNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getRewardsPoolNumber()"(overrides?: CallOverrides): Promise<[BigNumber]>;

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

    withdrawLPRewards(
      rewardsPoolAddress: string,
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawLPRewards(address,address,address)"(
      rewardsPoolAddress: string,
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawRewardsLeftovers(
      _rewardsToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawRewardsLeftovers(address)"(
      _rewardsToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  rewardsPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "rewardsPools(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "acceptOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRewardsPoolNumber(overrides?: CallOverrides): Promise<BigNumber>;

  "getRewardsPoolNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

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

  withdrawLPRewards(
    rewardsPoolAddress: string,
    recipient: string,
    lpTokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawLPRewards(address,address,address)"(
    rewardsPoolAddress: string,
    recipient: string,
    lpTokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawRewardsLeftovers(
    _rewardsToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawRewardsLeftovers(address)"(
    _rewardsToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    rewardsPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "rewardsPools(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    "acceptOwnership()"(overrides?: CallOverrides): Promise<void>;

    getRewardsPoolNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "getRewardsPoolNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    withdrawLPRewards(
      rewardsPoolAddress: string,
      recipient: string,
      lpTokenContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawLPRewards(address,address,address)"(
      rewardsPoolAddress: string,
      recipient: string,
      lpTokenContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawRewardsLeftovers(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawRewardsLeftovers(address)"(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferProposed(
      _oldOwner: string | null,
      _newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { _oldOwner: string; _newOwner: string }
    >;

    OwnershipTransferred(
      _newOwner: string | null
    ): TypedEventFilter<[string], { _newOwner: string }>;

    RewardsWithdrawn(
      rewardsToken: null,
      amount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { rewardsToken: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardsPools(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRewardsPoolNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "getRewardsPoolNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    withdrawLPRewards(
      rewardsPoolAddress: string,
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawLPRewards(address,address,address)"(
      rewardsPoolAddress: string,
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawRewardsLeftovers(
      _rewardsToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawRewardsLeftovers(address)"(
      _rewardsToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardsPools(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRewardsPoolNumber(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRewardsPoolNumber()"(
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

    withdrawLPRewards(
      rewardsPoolAddress: string,
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawLPRewards(address,address,address)"(
      rewardsPoolAddress: string,
      recipient: string,
      lpTokenContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawRewardsLeftovers(
      _rewardsToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawRewardsLeftovers(address)"(
      _rewardsToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
