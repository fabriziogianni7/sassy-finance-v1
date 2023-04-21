/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface AddresslistInterface extends utils.Interface {
  functions: {
    "addresslistLength()": FunctionFragment;
    "addresslistLengthAtBlock(uint256)": FunctionFragment;
    "isListed(address)": FunctionFragment;
    "isListedAtBlock(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addresslistLength"
      | "addresslistLengthAtBlock"
      | "isListed"
      | "isListedAtBlock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addresslistLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addresslistLengthAtBlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isListed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isListedAtBlock",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addresslistLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addresslistLengthAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isListed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isListedAtBlock",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Addresslist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AddresslistInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addresslistLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    addresslistLengthAtBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isListed(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isListedAtBlock(
      _account: PromiseOrValue<string>,
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addresslistLength(overrides?: CallOverrides): Promise<BigNumber>;

  addresslistLengthAtBlock(
    _blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isListed(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isListedAtBlock(
    _account: PromiseOrValue<string>,
    _blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addresslistLength(overrides?: CallOverrides): Promise<BigNumber>;

    addresslistLengthAtBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isListed(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isListedAtBlock(
      _account: PromiseOrValue<string>,
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    addresslistLength(overrides?: CallOverrides): Promise<BigNumber>;

    addresslistLengthAtBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isListed(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isListedAtBlock(
      _account: PromiseOrValue<string>,
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addresslistLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addresslistLengthAtBlock(
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isListed(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isListedAtBlock(
      _account: PromiseOrValue<string>,
      _blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
