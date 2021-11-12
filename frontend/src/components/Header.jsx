import { useEthers, useEtherBalance, useTokenBalance } from '@usedapp/core';
import Button from '@material-ui/core/Button';
import { formatEther, formatUnits } from '@ethersproject/units';
import { GetGreeting } from './greetFunctions';

export const Header = () => {
    const { account, activateBrowserWallet } = useEthers();
    const isConnected = account !== undefined;
    const SAND = '0x3845badAde8e6dFF049820680d1F14bD3903a5d0';
    const CUBE = '0xdf801468a808a32656d2ed2d2d80b72a129739f4';
    const MANA = '0x0f5d2fb29fb7d3cfee444a200298f468908cc942'

    let sandBalance = useTokenBalance(SAND, account);
    sandBalance = sandBalance ? sandBalance._hex : -1;

    let ethBalance = useEtherBalance(account);
    ethBalance = ethBalance ? ethBalance._hex : -1;

    let cubeBalance = useTokenBalance(CUBE, account);
    cubeBalance = cubeBalance ? cubeBalance._hex : -1;

    let manaBalance = useTokenBalance(MANA, account);
    manaBalance = manaBalance ? manaBalance._hex : -1;

    // formatUnits(sandBalance, 8);
    // formatUnits(ethBalance, 8);
    // formatUnits(cubeBalance, 8);
    // formatUnits(manaBalance, 8);
    // console.log(GetGreeting());

    return (
        <div>
            {
                isConnected ? 
                <Button>Connected</Button> :
                <Button onClick={activateBrowserWallet}>Connect</Button>
            }
            <div>Balance: {formatEther(ethBalance)} ETH</div>
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