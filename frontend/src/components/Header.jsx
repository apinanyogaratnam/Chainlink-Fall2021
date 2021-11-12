import Button from '@material-ui/core/Button';
import Web3 from 'web3';
import { useState } from 'react';

export const Header = () => {

    const [isConnected, setIsConnected] = useState(false);
    const activateWeb3 = () => {
        let provider = window.ethereum;

        if (provider) {
            provider
                .request({
                    method: 'eth_requestAccounts',
                })
                .then(accounts => {
                    const selectedAccount = accounts[0];
                    console.log("selected account is", selectedAccount);
                })
                .catch(error => {
                    console.log(error);
                });
            
            window.ethereum.on('accountsChanged', function(accounts) {
                const selectedAccount = accounts[0];
                console.log("selected account is", selectedAccount);
            });

            setIsConnected(true);
        }

        const web3 = new Web3(provider);
    }

    return (
        <div>
            {
                isConnected ? 
                <Button>Connected</Button> :
                <Button onClick={activateWeb3}>Connect</Button>
            }
            <div>Balance: {0} ETH</div>
            <div className="coins-container">
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 1 */}
                    <h1>CUBE</h1>
                    <h4>Balance: {-1}</h4>
                </div>
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 2 */}
                    <h1>SAND</h1>
                    <h4>Balance: {-1}</h4>
                </div>
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 3 */}
                    <h1>MANA</h1>
                    <h4>Balance: {-1}</h4>
                </div>
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 4 */}
                    <h1>ETH</h1>
                    <h4>Balance: {-1}</h4>
                </div>
            </div>
        </div>
    );
};