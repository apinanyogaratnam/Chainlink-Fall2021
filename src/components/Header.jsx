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
        </div>
    );
};