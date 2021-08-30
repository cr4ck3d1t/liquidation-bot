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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PriceGuardFactoryInterface extends ethers.utils.Interface {
  functions: {
    "REVISION()": FunctionFragment;
    "getFeed(bytes32)": FunctionFragment;
    "getFeedIdentity(uint8,bytes)": FunctionFragment;
    "getGuard(bytes32)": FunctionFragment;
    "getGuardIdentity(uint8,uint8,tuple[])": FunctionFragment;
    "getOrCreateFeed(uint8,bytes)": FunctionFragment;
    "getOrCreateGuard(uint8,uint8,tuple[])": FunctionFragment;
    "initialize()": FunctionFragment;
    "knownFeed(bytes32)": FunctionFragment;
    "knownGuard(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(functionFragment: "getFeed", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getFeedIdentity",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getGuard", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getGuardIdentity",
    values: [
      BigNumberish,
      BigNumberish,
      { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreateFeed",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrCreateGuard",
    values: [
      BigNumberish,
      BigNumberish,
      { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "knownFeed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "knownGuard",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFeedIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGuardIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreateFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrCreateGuard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "knownFeed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "knownGuard", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class PriceGuardFactory extends Contract {
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

  interface: PriceGuardFactoryInterface;

  functions: {
    REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    "REVISION()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFeed(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { feed: string }>;

    "getFeed(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { feed: string }>;

    getFeedIdentity(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { identity: string }>;

    "getFeedIdentity(uint8,bytes)"(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { identity: string }>;

    getGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { guard: string }>;

    "getGuard(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { guard: string }>;

    getGuardIdentity(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<[string] & { identity: string }>;

    "getGuardIdentity(uint8,uint8,tuple[])"(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<[string] & { identity: string }>;

    getOrCreateFeed(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "getOrCreateFeed(uint8,bytes)"(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getOrCreateGuard(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "getOrCreateGuard(uint8,uint8,tuple[])"(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialize(overrides?: Overrides): Promise<ContractTransaction>;

    "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

    knownFeed(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { known: boolean }>;

    "knownFeed(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { known: boolean }>;

    knownGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { known: boolean }>;

    "knownGuard(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { known: boolean }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  "REVISION()"(overrides?: CallOverrides): Promise<BigNumber>;

  getFeed(identity: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getFeed(bytes32)"(
    identity: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getFeedIdentity(
    guardType: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "getFeedIdentity(uint8,bytes)"(
    guardType: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getGuard(identity: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getGuard(bytes32)"(
    identity: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getGuardIdentity(
    src: BigNumberish,
    dest: BigNumberish,
    feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
    overrides?: CallOverrides
  ): Promise<string>;

  "getGuardIdentity(uint8,uint8,tuple[])"(
    src: BigNumberish,
    dest: BigNumberish,
    feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
    overrides?: CallOverrides
  ): Promise<string>;

  getOrCreateFeed(
    guardType: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "getOrCreateFeed(uint8,bytes)"(
    guardType: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getOrCreateGuard(
    src: BigNumberish,
    dest: BigNumberish,
    feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "getOrCreateGuard(uint8,uint8,tuple[])"(
    src: BigNumberish,
    dest: BigNumberish,
    feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialize(overrides?: Overrides): Promise<ContractTransaction>;

  "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

  knownFeed(identity: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "knownFeed(bytes32)"(
    identity: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  knownGuard(identity: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "knownGuard(bytes32)"(
    identity: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    "REVISION()"(overrides?: CallOverrides): Promise<BigNumber>;

    getFeed(identity: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getFeed(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getFeedIdentity(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getFeedIdentity(uint8,bytes)"(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getGuard(identity: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getGuard(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getGuardIdentity(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<string>;

    "getGuardIdentity(uint8,uint8,tuple[])"(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<string>;

    getOrCreateFeed(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getOrCreateFeed(uint8,bytes)"(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrCreateGuard(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<string>;

    "getOrCreateGuard(uint8,uint8,tuple[])"(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    knownFeed(identity: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "knownFeed(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    knownGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "knownGuard(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    "REVISION()"(overrides?: CallOverrides): Promise<BigNumber>;

    getFeed(identity: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getFeed(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeedIdentity(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFeedIdentity(uint8,bytes)"(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGuard(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGuardIdentity(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGuardIdentity(uint8,uint8,tuple[])"(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrCreateFeed(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "getOrCreateFeed(uint8,bytes)"(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getOrCreateGuard(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "getOrCreateGuard(uint8,uint8,tuple[])"(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialize(overrides?: Overrides): Promise<BigNumber>;

    "initialize()"(overrides?: Overrides): Promise<BigNumber>;

    knownFeed(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "knownFeed(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    knownGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "knownGuard(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "REVISION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFeed(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFeed(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeedIdentity(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFeedIdentity(uint8,bytes)"(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGuard(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGuardIdentity(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGuardIdentity(uint8,uint8,tuple[])"(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrCreateFeed(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "getOrCreateFeed(uint8,bytes)"(
      guardType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getOrCreateGuard(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "getOrCreateGuard(uint8,uint8,tuple[])"(
      src: BigNumberish,
      dest: BigNumberish,
      feeds: { feedType: BigNumberish; ctorData: BytesLike; sell: boolean }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialize(overrides?: Overrides): Promise<PopulatedTransaction>;

    "initialize()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    knownFeed(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "knownFeed(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    knownGuard(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "knownGuard(bytes32)"(
      identity: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
