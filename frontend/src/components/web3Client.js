import Web3 from 'web3';
import Greeter from '../Greeter.json';

let selectedAccount;
let greeterContract;
let isInitialized = false;

export const activateWeb3 = async () => {
    let provider = window.ethereum;

    if (provider) {
        provider
            .request({
                method: 'eth_requestAccounts',
            })
            .then(accounts => {
                selectedAccount = accounts[0];
                console.log("selected account is", selectedAccount);
            })
            .catch(error => {
                console.log(error);
                return;
            });
        
        window.ethereum.on('accountsChanged', function(accounts) {
            selectedAccount = accounts[0];
            console.log("selected account is", selectedAccount);
        });
    }

    const web3 = new Web3(provider);

    greeterContract = new web3.eth.Contract(
        Greeter.abi,
        Greeter.address
    );

    isInitialized = true;
    return selectedAccount;
}

export const viewGreeting = async () => {
    if (!isInitialized) {
        await activateWeb3();
    }

    const res = await greeterContract.methods.getGreeting().call();
    console.log(res);
}