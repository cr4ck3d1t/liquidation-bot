/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AllowAnyPriceGuard } from "../AllowAnyPriceGuard";

export class AllowAnyPriceGuard__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AllowAnyPriceGuard> {
    return super.deploy(overrides || {}) as Promise<AllowAnyPriceGuard>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AllowAnyPriceGuard {
    return super.attach(address) as AllowAnyPriceGuard;
  }
  connect(signer: Signer): AllowAnyPriceGuard__factory {
    return super.connect(signer) as AllowAnyPriceGuard__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AllowAnyPriceGuard {
    return new Contract(address, _abi, signerOrProvider) as AllowAnyPriceGuard;
  }
}

const _abi = [
  {
    inputs: [],
    name: "destDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "srcDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610111806100206000396000f3fe6080604052348015600f57600080fd5b506004361060505760003560e01c80635c1952171460555780636140461c14608157806398d5fdca14609d578063c6414eee1460a3578063c78643f4146081575b600080fd5b606f60048036036020811015606957600080fd5b503560c3565b60408051918252519081900360200190f35b608760c9565b6040805160ff9092168252519081900360200190f35b606f60ce565b606f6004803603604081101560b757600080fd5b508035906020013560d3565b50600090565b600190565b600090565b60009291505056fea2646970667358221220249cfd814a3fa63a1f83c2a7cb2050919390aded77a3fe4ee54a92b6405dea7864736f6c63430007040033";
