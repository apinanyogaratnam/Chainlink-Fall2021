import { useEthers, useEtherBalance, useTokenBalance } from '@usedapp/core';
import Button from '@material-ui/core/Button';
import { formatEther, formatUnits } from '@ethersproject/units';

export const Header = () => {
    const { account, activateBrowserWallet } = useEthers();
    const isConnected = account !== undefined;
    const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f';
    let tokenBalance = useTokenBalance(DAI, account);
    tokenBalance = tokenBalance ? tokenBalance._hex : -1;

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
                    <h4>Balance: {}</h4>
                </div>
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 2 */}
                    <h1>SAND</h1>
                    <h4>Balance: {}</h4>
                </div>
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 3 */}
                    <h1>ETH</h1>
                    <h4>Balance: {account ? tokenBalance : undefined}</h4>
                </div>
                <div className="coin-container" onClick={() => console.log("asdf")}>
                    {/*Box 4 */}
                    <h1>COIN</h1>
                    <h4>Balance: {}</h4>
                </div>
            </div>
        </div>
    );
};