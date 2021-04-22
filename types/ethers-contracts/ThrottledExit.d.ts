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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ThrottledExitInterface extends ethers.utils.Interface {
  functions: {
    "exitInfo(address)": FunctionFragment;
    "nextAvailableExitBlock()": FunctionFragment;
    "nextAvailableRoundExitVolume()": FunctionFragment;
    "throttleRoundBlocks()": FunctionFragment;
    "throttleRoundCap()": FunctionFragment;
    "getPendingReward(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "exitInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "nextAvailableExitBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextAvailableRoundExitVolume",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "throttleRoundBlocks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "throttleRoundCap",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingReward",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "exitInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextAvailableExitBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextAvailableRoundExitVolume",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "throttleRoundBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "throttleRoundCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingReward",
    data: BytesLike
  ): Result;

  events: {
    "ExitCompleted(address,uint256)": EventFragment;
    "ExitRequested(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExitCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExitRequested"): EventFragment;
}

export class ThrottledExit extends Contract {
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

  interface: ThrottledExitInterface;

  functions: {
    exitInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { exitBlock: BigNumber; exitStake: BigNumber }
    >;

    "exitInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { exitBlock: BigNumber; exitStake: BigNumber }
    >;

    nextAvailableExitBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextAvailableExitBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextAvailableRoundExitVolume(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "nextAvailableRoundExitVolume()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    throttleRoundBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;

    "throttleRoundBlocks()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    throttleRoundCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    "throttleRoundCap()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPendingReward(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPendingReward(uint256)"(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  exitInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { exitBlock: BigNumber; exitStake: BigNumber }
  >;

  "exitInfo(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { exitBlock: BigNumber; exitStake: BigNumber }
  >;

  nextAvailableExitBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "nextAvailableExitBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  nextAvailableRoundExitVolume(overrides?: CallOverrides): Promise<BigNumber>;

  "nextAvailableRoundExitVolume()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  throttleRoundBlocks(overrides?: CallOverrides): Promise<BigNumber>;

  "throttleRoundBlocks()"(overrides?: CallOverrides): Promise<BigNumber>;

  throttleRoundCap(overrides?: CallOverrides): Promise<BigNumber>;

  "throttleRoundCap()"(overrides?: CallOverrides): Promise<BigNumber>;

  getPendingReward(
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPendingReward(uint256)"(
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    exitInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { exitBlock: BigNumber; exitStake: BigNumber }
    >;

    "exitInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { exitBlock: BigNumber; exitStake: BigNumber }
    >;

    nextAvailableExitBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "nextAvailableExitBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextAvailableRoundExitVolume(overrides?: CallOverrides): Promise<BigNumber>;

    "nextAvailableRoundExitVolume()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    throttleRoundBlocks(overrides?: CallOverrides): Promise<BigNumber>;

    "throttleRoundBlocks()"(overrides?: CallOverrides): Promise<BigNumber>;

    throttleRoundCap(overrides?: CallOverrides): Promise<BigNumber>;

    "throttleRoundCap()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPendingReward(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPendingReward(uint256)"(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    ExitCompleted(
      user: null,
      stake: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; stake: BigNumber }
    >;

    ExitRequested(
      user: null,
      exitBlock: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; exitBlock: BigNumber }
    >;
  };

  estimateGas: {
    exitInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "exitInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextAvailableExitBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "nextAvailableExitBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextAvailableRoundExitVolume(overrides?: CallOverrides): Promise<BigNumber>;

    "nextAvailableRoundExitVolume()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    throttleRoundBlocks(overrides?: CallOverrides): Promise<BigNumber>;

    "throttleRoundBlocks()"(overrides?: CallOverrides): Promise<BigNumber>;

    throttleRoundCap(overrides?: CallOverrides): Promise<BigNumber>;

    "throttleRoundCap()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPendingReward(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPendingReward(uint256)"(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exitInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exitInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextAvailableExitBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nextAvailableExitBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextAvailableRoundExitVolume(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nextAvailableRoundExitVolume()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    throttleRoundBlocks(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "throttleRoundBlocks()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    throttleRoundCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "throttleRoundCap()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingReward(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPendingReward(uint256)"(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
