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
            <div></div> {/*Box 1 */}
            <div></div> {/*Box 2 */}
            <div></div> {/*Box 3 */}
            <div></div> {/*Box 4 */}
        </div>
    );
};