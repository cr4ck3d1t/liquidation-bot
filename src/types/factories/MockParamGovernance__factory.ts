/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockParamGovernance } from "../MockParamGovernance";

export class MockParamGovernance__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockParamGovernance> {
    return super.deploy(overrides || {}) as Promise<MockParamGovernance>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockParamGovernance {
    return super.attach(address) as MockParamGovernance;
  }
  connect(signer: Signer): MockParamGovernance__factory {
    return super.connect(signer) as MockParamGovernance__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockParamGovernance {
    return new Contract(address, _abi, signerOrProvider) as MockParamGovernance;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
    ],
    name: "getParam",
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
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setParam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "xWOW",
        type: "address",
      },
    ],
    name: "setXWOW",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xWOW",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610222806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806321f8a7211461006757806389e2587d146100a05780639f30490a146100c8578063acdd8243146100eb578063ca446dd9146100f3578063efc1a9bf1461011f575b600080fd5b6100846004803603602081101561007d57600080fd5b503561014e565b604080516001600160a01b039092168252519081900360200190f35b6100c6600480360360208110156100b657600080fd5b50356001600160a01b0316610169565b005b6100c6600480360360408110156100de57600080fd5b508035906020013561018b565b61008461019d565b6100c66004803603604081101561010957600080fd5b50803590602001356001600160a01b03166101ac565b61013c6004803603602081101561013557600080fd5b50356101da565b60408051918252519081900360200190f35b6000908152600160205260409020546001600160a01b031690565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60009182526020829052604090912055565b6002546001600160a01b031690565b60009182526001602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000908152602081905260409020549056fea2646970667358221220e039f8dad57ca87e5403bf223ed26ee18e75d2da71732ece3d1324f3cd357c4664736f6c63430007040033";
