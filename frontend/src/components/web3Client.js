import Web3 from 'web3';
import Greeter from '../Greeter.json';

let selectedAccount;

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
            });
        
        window.ethereum.on('accountsChanged', function(accounts) {
            selectedAccount = accounts[0];
            console.log("selected account is", selectedAccount);
        });
    }

    const web3 = new Web3(provider);
    // const networkId = await web3.eth.net.getId();

    const greeterContract = new web3.eth.Contract(
        Greeter.abi,
        Greeter.address
    );
}

export const getGreeting = async () => {
    Greeter.abi.forEach(element => {
        if (element.type === 'function' && element.name === 'getGreeting') {
            console.log(element);
            // return element.getGreeting().send({from: selectedAccount});
        }
    });

    return null;
}
