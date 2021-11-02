import { useEthers } from '@usedapp/core';
import Button from '@material-ui/core/Button';

export const Header = () => {
    const { account, activateBrowserWallet } = useEthers();
    const isConnected = account !== undefined;

    return (
        <div>
            {
                isConnected ? 
                <Button>Connected</Button> :
                <Button onClick={activateBrowserWallet}>Connect</Button>
            }
            <div className="coins-container">
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 1 */}
                    <h1>CUBE</h1>
                </div>
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 2 */}
                    <h1>SAND</h1>
                </div>
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 3 */}
                    <h1>ETH</h1>
                </div>
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 4 */}
                    <h1>COIN</h1>
                </div>
            </div>
        </div>
    );
};