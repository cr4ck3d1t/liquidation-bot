/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ReserveFactory } from "../ReserveFactory";

export class ReserveFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ReserveFactory> {
    return super.deploy(overrides || {}) as Promise<ReserveFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReserveFactory {
    return super.attach(address) as ReserveFactory;
  }
  connect(signer: Signer): ReserveFactory__factory {
    return super.connect(signer) as ReserveFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveFactory {
    return new Contract(address, _abi, signerOrProvider) as ReserveFactory;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "REVISION",
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
    name: "getAllLendables",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
    ],
    name: "getOrCreateReserve",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "shortable",
        type: "address",
      },
    ],
    name: "getOrCreateShortingReserve",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lendable",
        type: "address",
      },
    ],
    name: "getReserve",
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
        internalType: "address",
        name: "pairFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "paramProviderFactory",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isRegisteredLendable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "m_reserveDeployer",
    outputs: [
      {
        internalType: "contract IReserveDeployer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "registerLendable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "registerLendables",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reserveBytecodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reserveDeployer",
        type: "address",
      },
    ],
    name: "setReserveDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612080806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063a8608e0b11610097578063d55ec69711610066578063d55ec697146101fc578063d88a0c4814610204578063dde43cba1461020c578063f2fde38b1461021457610100565b8063a8608e0b146101ac578063b40c750d146101c1578063c9a396e9146101d6578063ce97a558146101e957610100565b8063715018a6116100d3578063715018a614610176578063745dcd2f1461017e5780637bf8c2fb146101915780638da5cb5b146101a457610100565b8063289bd4e014610105578063485cc9551461012e578063532cc278146101435780635cf3abfe14610156575b600080fd5b610118610113366004611329565b610227565b60405161012591906115ff565b60405180910390f35b61014161013c366004611361565b6102f3565b005b610118610151366004611329565b6103ea565b610169610164366004611329565b6103fe565b6040516101259190611520565b610141610457565b61011861018c366004611399565b610505565b61016961019f366004611329565b6105e6565b6101696106a5565b6101b46106b5565b604051610125919061160a565b6101c96106bc565b60405161012591906115bb565b6101696101e4366004611329565b610714565b6101416101f7366004611329565b610733565b6101416107b8565b610169610844565b6101b4610854565b610141610222366004611329565b610859565b600061023161095e565b6001600160a01b03166102426106a5565b6001600160a01b03161461028b576040805162461bcd60e51b81526020600482018190526024820152600080516020612003833981519152604482015290519081900360640190fd5b61029761016a83610962565b156040518060400160405280600381526020016210549360ea1b815250906102db5760405162461bcd60e51b81526004016102d29190611613565b60405180910390fd5b506102e861016a83610977565b50600190505b919050565b600054610100900460ff168061030c575061030c61098c565b8061031a575060005460ff16155b6103555760405162461bcd60e51b815260040180806020018281038252602e815260200180611fd5602e913960400191505060405180910390fd5b600054610100900460ff16158015610380576000805460ff1961ff0019909116610100171660011790555b61038861099d565b610390610a3e565b610398610adb565b600160f81b6101685561016680546001600160a01b038086166001600160a01b03199283161790925561016780549285169290911691909117905580156103e5576000805461ff00191690555b505050565b60006103f861016a83610962565b92915050565b60008161040d61016a82610962565b60405180604001604052806002815260200161139360f21b815250906104465760405162461bcd60e51b81526004016102d29190611613565b5061045083610bce565b9392505050565b61045f61095e565b6001600160a01b03166104706106a5565b6001600160a01b0316146104b9576040805162461bcd60e51b81526020600482018190526024820152600080516020612003833981519152604482015290519081900360640190fd5b610134546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a361013480546001600160a01b0319169055565b600061050f61095e565b6001600160a01b03166105206106a5565b6001600160a01b031614610569576040805162461bcd60e51b81526020600482018190526024820152600080516020612003833981519152604482015290519081900360640190fd5b60005b828110156105dc576105a184848381811061058357fe5b90506020020160208101906105989190611329565b61016a90610962565b6105d4576105d28484838181106105b457fe5b90506020020160208101906105c99190611329565b61016a90610977565b505b60010161056c565b5060019392505050565b61016654604051632fb03d0160e01b815260009183916001600160a01b0390911690632fb03d019061061c908490600401611520565b60206040518083038186803b15801561063457600080fd5b505afa158015610648573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066c9190611408565b604051806040016040528060028152602001614e5360f01b815250906104465760405162461bcd60e51b81526004016102d29190611613565b610134546001600160a01b031690565b6101685490565b61016a8054604080516020808402820181019092528281526060939092909183018282801561070a57602002820191906000526020600020905b8154815260200190600101908083116106f6575b5050505050905090565b6001600160a01b03908116600090815261016960205260409020541690565b61073b61095e565b6001600160a01b031661074c6106a5565b6001600160a01b031614610795576040805162461bcd60e51b81526020600482018190526024820152600080516020612003833981519152604482015290519081900360640190fd5b61019e80546001600160a01b0319166001600160a01b0392909216919091179055565b61019e60009054906101000a90046001600160a01b03166001600160a01b031663f633418b6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561080957600080fd5b505af115801561081d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108419190611345565b50565b61019e546001600160a01b031681565b602381565b61086161095e565b6001600160a01b03166108726106a5565b6001600160a01b0316146108bb576040805162461bcd60e51b81526020600482018190526024820152600080516020612003833981519152604482015290519081900360640190fd5b6001600160a01b0381166109005760405162461bcd60e51b8152600401808060200182810382526026815260200180611faf6026913960400191505060405180910390fd5b610134546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a361013480546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6000610450836001600160a01b038416610f72565b6000610450836001600160a01b038416610f8a565b600061099730610fd4565b15905090565b600054610100900460ff16806109b657506109b661098c565b806109c4575060005460ff16155b6109ff5760405162461bcd60e51b815260040180806020018281038252602e815260200180611fd5602e913960400191505060405180910390fd5b600054610100900460ff16158015610a2a576000805460ff1961ff0019909116610100171660011790555b8015610841576000805461ff001916905550565b600054610100900460ff1680610a575750610a5761098c565b80610a65575060005460ff16155b610aa05760405162461bcd60e51b815260040180806020018281038252602e815260200180611fd5602e913960400191505060405180910390fd5b600054610100900460ff16158015610acb576000805460ff1961ff0019909116610100171660011790555b610ad361099d565b610a2a610fda565b600054610100900460ff1680610af45750610af461098c565b80610b02575060005460ff16155b610b3d5760405162461bcd60e51b815260040180806020018281038252602e815260200180611fd5602e913960400191505060405180910390fd5b600054610100900460ff16158015610b68576000805460ff1961ff0019909116610100171660011790555b603354610b736110d4565b11610baf5760405162461bcd60e51b81526004018080602001828103825260288152602001806120236028913960400191505060405180910390fd5b610bb76110d4565b6033558015610841576000805461ff001916905550565b6001600160a01b03808216600090815261016960205260409020541680610e12576060826001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015610c2a57600080fd5b505afa158015610c3e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c669190810190611428565b90506060836001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015610ca357600080fd5b505afa158015610cb7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610cdf9190810190611428565b61016754604051631e437cb160e31b81529192506000916001600160a01b039091169063f21be58890610d16908890600401611520565b602060405180830381600087803b158015610d3057600080fd5b505af1158015610d44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d689190611345565b61016654604051919250606091631b1492e160e11b91610d9e916001600160a01b03909116908590889088908c90602401611569565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091529050610ddc86826110d9565b6001600160a01b0387811660009081526101696020526040902080546001600160a01b0319169183169190911790559450505050505b6023610e1d82611226565b1015610f0a57806001600160a01b0316633659cfe661019e60009054906101000a90046001600160a01b03166001600160a01b031663f633418b6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610e8357600080fd5b505af1158015610e97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebb9190611345565b6040518263ffffffff1660e01b8152600401610ed79190611520565b600060405180830381600087803b158015610ef157600080fd5b505af1158015610f05573d6000803e3d6000fd5b505050505b610167546040516308d9a3cf60e41b81526001600160a01b0390911690638d9a3cf090610f3b908590600401611520565b600060405180830381600087803b158015610f5557600080fd5b505af1158015610f69573d6000803e3d6000fd5b50505050919050565b60009081526001919091016020526040902054151590565b6000610f968383610f72565b610fcc575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103f8565b5060006103f8565b3b151590565b600054610100900460ff1680610ff35750610ff361098c565b80611001575060005460ff16155b61103c5760405162461bcd60e51b815260040180806020018281038252602e815260200180611fd5602e913960400191505060405180910390fd5b600054610100900460ff16158015611067576000805460ff1961ff0019909116610100171660011790555b600061107161095e565b61013480546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610841576000805461ff001916905550565b602390565b600080836040516020016110ed9190611503565b604051602081830303815290604052805190602001209050806040516111129061131c565b8190604051809103906000f5905080158015611132573d6000803e3d6000fd5b509150816001600160a01b031663cf7a1d7761019e60009054906101000a90046001600160a01b03166001600160a01b031663f633418b6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561119557600080fd5b505af11580156111a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111cd9190611345565b30866040518463ffffffff1660e01b81526004016111ed93929190611534565b600060405180830381600087803b15801561120757600080fd5b505af115801561121b573d6000803e3d6000fd5b505050505092915050565b600080826001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561126257600080fd5b505afa158015611276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129a9190611345565b9050806001600160a01b031663dde43cba6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112d557600080fd5b505afa925050508015611305575060408051601f3d908101601f19168201909252611302918101906114bf565b60015b6113135760019150506102ee565b91506102ee9050565b6109438061166c83390190565b60006020828403121561133a578081fd5b813561045081611656565b600060208284031215611356578081fd5b815161045081611656565b60008060408385031215611373578081fd5b823561137e81611656565b9150602083013561138e81611656565b809150509250929050565b600080602083850312156113ab578182fd5b823567ffffffffffffffff808211156113c2578384fd5b818501915085601f8301126113d5578384fd5b8135818111156113e3578485fd5b86602080830285010111156113f6578485fd5b60209290920196919550909350505050565b600060208284031215611419578081fd5b81518015158114610450578182fd5b600060208284031215611439578081fd5b815167ffffffffffffffff80821115611450578283fd5b818401915084601f830112611463578283fd5b81518181111561146f57fe5b604051601f8201601f19168101602001838111828210171561148d57fe5b6040528181528382016020018710156114a4578485fd5b6114b5826020830160208701611626565b9695505050505050565b6000602082840312156114d0578081fd5b5051919050565b600081518084526114ef816020860160208601611626565b601f01601f19169290920160200192915050565b60609190911b6bffffffffffffffffffffffff1916815260140190565b6001600160a01b0391909116815260200190565b6001600160a01b03848116825283166020820152606060408201819052600090611560908301846114d7565b95945050505050565b600060018060a01b038088168352808716602084015260a0604084015261159360a08401876114d7565b83810360608501526115a581876114d7565b9250508084166080840152509695505050505050565b6020808252825182820181905260009190848201906040850190845b818110156115f3578351835292840192918401916001016115d7565b50909695505050505050565b901515815260200190565b90815260200190565b60006020825261045060208301846114d7565b60005b83811015611641578181015183820152602001611629565b83811115611650576000848401525b50505050565b6001600160a01b038116811461084157600080fdfe608060405234801561001057600080fd5b50610923806100206000396000f3fe6080604052600436106100745760003560e01c80638f2839701161004e5780638f2839701461017c578063cf7a1d77146101af578063d1f578941461026e578063f851a4401461032457610083565b80633659cfe6146100985780634f1ef286146100cb5780635c60da1b1461014b57610083565b3661008357610081610339565b005b34801561008f57600080fd5b50610081610339565b3480156100a457600080fd5b50610081600480360360208110156100bb57600080fd5b50356001600160a01b0316610353565b610081600480360360408110156100e157600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561010c57600080fd5b82018360208201111561011e57600080fd5b8035906020019184600183028401116401000000008311171561014057600080fd5b50909250905061038d565b34801561015757600080fd5b5061016061043a565b604080516001600160a01b039092168252519081900360200190f35b34801561018857600080fd5b506100816004803603602081101561019f57600080fd5b50356001600160a01b0316610477565b610081600480360360608110156101c557600080fd5b6001600160a01b0382358116926020810135909116918101906060810160408201356401000000008111156101f957600080fd5b82018360208201111561020b57600080fd5b8035906020019184600183028401116401000000008311171561022d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610531945050505050565b6100816004803603604081101561028457600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156102af57600080fd5b8201836020820111156102c157600080fd5b803590602001918460018302840111640100000000831117156102e357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610561945050505050565b34801561033057600080fd5b50610160610641565b61034161066c565b61035161034c610674565b610699565b565b61035b6106bd565b6001600160a01b0316336001600160a01b031614156103825761037d816106e2565b61038a565b61038a610339565b50565b6103956106bd565b6001600160a01b0316336001600160a01b0316141561042d576103b7836106e2565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d8060008114610414576040519150601f19603f3d011682016040523d82523d6000602084013e610419565b606091505b505090508061042757600080fd5b50610435565b610435610339565b505050565b60006104446106bd565b6001600160a01b0316336001600160a01b0316141561046c57610465610674565b9050610474565b610474610339565b90565b61047f6106bd565b6001600160a01b0316336001600160a01b03161415610382576001600160a01b0381166104dd5760405162461bcd60e51b815260040180806020018281038252603681526020018061087d6036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6105066106bd565b604080516001600160a01b03928316815291841660208301528051918290030190a161037d81610722565b600061053b610674565b6001600160a01b03161461054e57600080fd5b6105588382610561565b61043582610722565b600061056b610674565b6001600160a01b03161461057e57600080fd5b61058782610746565b80511561063d576000826001600160a01b0316826040518082805190602001908083835b602083106105ca5780518252601f1990920191602091820191016105ab565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461062a576040519150601f19603f3d011682016040523d82523d6000602084013e61062f565b606091505b505090508061043557600080fd5b5050565b600061064b6106bd565b6001600160a01b0316336001600160a01b0316141561046c576104656106bd565b6103516107ae565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156106b8573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6106eb81610746565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b61074f8161080e565b61078a5760405162461bcd60e51b815260040180806020018281038252603b8152602001806108b3603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6107b66106bd565b6001600160a01b0316336001600160a01b031614156108065760405162461bcd60e51b815260040180806020018281038252603281526020018061084b6032913960400191505060405180910390fd5b610351610351565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061084257508115155b94935050505056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a2646970667358221220bde8e9c96b8d3ffcd547b02f95c6dc560f1a05011a8dd6c847e5a9a2cff37c7364736f6c634300070400334f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657256657273696f6e65643a207265766973696f6e20697320746f6f206c6f7720746f20757064617465a264697066735822122085d0b09ad15407fb9ce77eaa6a29352e3ded1de0924f8274c318bf2fc8e87f3a64736f6c63430007040033";
