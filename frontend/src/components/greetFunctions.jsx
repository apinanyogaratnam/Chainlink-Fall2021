import Greeter from '../Greeter.json';
import { useContractCall } from '@usedapp/core'

export const SetGreeting = (greetingString) => {
    console.log(Greeter.address)
    const [tokenBalance] = useContractCall(
      Greeter.abi, // ABI interface of the called contract
      Greeter.address, // On-chain address of the deployed contract
      'setGreeting', // Method to be called
      greetingString // Method arguments - address to be checked for balance
    ) ?? []
    return tokenBalance;
}
