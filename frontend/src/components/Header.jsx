import Button from '@material-ui/core/Button';
import Web3 from 'web3';
import { useState } from 'react';
import Greeter from '../Greeter.json';
import { activateWeb3, getGreeting } from './web3Client';

export const Header = () => {

    const [isConnected, setIsConnected] = useState(true);
    console.log(getGreeting());

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