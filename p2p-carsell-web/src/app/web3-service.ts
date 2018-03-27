import { Injectable } from '@angular/core';
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';
import { environment } from '../environments/environment';

@Injectable()
export class Web3Service {

  public web3:Web3;
  public carsellContract:any;
  public carsellContractData:any;



  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider(environment.rpcUrl));
    this.carsellContract = this.web3.eth.contract([{"constant":true,"inputs":[],"name":"verifyOwnership","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getCar","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isSold","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"make","type":"string"},{"name":"model","type":"string"},{"name":"year","type":"string"},{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
    this.carsellContractData = '0x6060604052341561000f57600080fd5b6040516108a53803806108a5833981016040528080518201919060200180518201919060200180518201919060200180519060200190919050508360026000019080519060200190610062929190610104565b50826002600101908051906020019061007c929190610104565b5081600280019080519060200190610095929190610104565b50806002600301819055506000600160146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506101a9565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014557805160ff1916838001178555610173565b82800160010185558215610173579182015b82811115610172578251825591602001919060010190610157565b5b5090506101809190610184565b5090565b6101a691905b808211156101a257600081600090555060010161018a565b5090565b90565b6106ed806101b86000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806392a4270414610067578063a6f2ae3a14610094578063ca04c8341461009e578063e852e7411461027c575b600080fd5b341561007257600080fd5b61007a6102a9565b604051808215151515815260200191505060405180910390f35b61009c610331565b005b34156100a957600080fd5b6100b1610424565b60405180806020018060200180602001888152602001871515151581526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184810384528b818151815260200191508051906020019080838360005b8381101561016d578082015181840152602081019050610152565b50505050905090810190601f16801561019a5780820380516001836020036101000a031916815260200191505b5084810383528a818151815260200191508051906020019080838360005b838110156101d35780820151818401526020810190506101b8565b50505050905090810190601f1680156102005780820380516001836020036101000a031916815260200191505b50848103825289818151815260200191508051906020019080838360005b8381101561023957808201518184015260208101905061021e565b50505050905090810190601f1680156102665780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b341561028757600080fd5b61028f610696565b604051808215151515815260200191505060405180910390f35b600060011515600160149054906101000a900460ff16151514801561031b5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15610329576001905061032e565b600090505b90565b6002600301543414151561034457600080fd5b60001515600160149054906101000a900460ff16151514151561036657600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060146101000a81548160ff0219169083151502179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050151561042257600080fd5b565b61042c6106ad565b6104346106ad565b61043c6106ad565b6000806000806002600001600260010160028001600260030154600160149054906101000a900460ff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16868054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105405780601f1061051557610100808354040283529160200191610540565b820191906000526020600020905b81548152906001019060200180831161052357829003601f168201915b50505050509650858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105dc5780601f106105b1576101008083540402835291602001916105dc565b820191906000526020600020905b8154815290600101906020018083116105bf57829003601f168201915b50505050509550848054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106785780601f1061064d57610100808354040283529160200191610678565b820191906000526020600020905b81548152906001019060200180831161065b57829003601f168201915b50505050509450965096509650965096509650965090919293949596565b6000600160149054906101000a900460ff16905090565b6020604051908101604052806000815250905600a165627a7a72305820ffd96ebda46ead6aa6551e8f8fbce79223b8a459d10feb04efb336f8f4bb8a050029';
  }

}
