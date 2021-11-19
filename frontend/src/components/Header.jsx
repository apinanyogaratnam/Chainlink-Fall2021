import Button from '@material-ui/core/Button';
import Web3 from 'web3';
import { useState } from 'react';
import Greeter from '../Greeter.json';
import { activateWeb3, viewGreeting } from './web3Client';
import WeMetaImage from './image.png';
import axios from 'axios';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

export const Header = () => {

    const [isConnected, setIsConnected] = useState(null);
    const [address, setAddress] = useState('');

    const mintStream = async (e, address) => {
        e.preventDefault();

        const nftPortApiKey = process.env.REACT_APP_NFT_PORT_API_KEY;
        const urlToMint = "https://api.nftport.xyz/v0/mints/easy/urls"
        const params = {
            params: {
                "chain": "rinkeby",
                "name": "MetaETF Hodler",
                "description": "A free NFT for every user just for visiting our platform.",
                "mint_to_address": address
            }
        }
        const body = {
            file: WeMetaImage
        };
  
        const auth = {
          headers: {
            Authorization: nftPortApiKey
          }
        };
  
        const res = await axios.post(urlToMint, params, body, auth);
        
        if (res.status === 200) {
          alert("Successfully minted stream");
          const urlOfNFTDeployed = res.data.transaction_external_url;
          console.log(urlOfNFTDeployed);
        } else {
            alert("Something went wrong");
        }
    }

    const connectWallet = async () => {
        const address = await activateWeb3();
        setAddress(address);
    }

    return (
        <div>
            {
                isConnected ? 
                <Button>Connected</Button> :
                <Button onClick={connectWallet}>Connect</Button>
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
            <Button onClick={viewGreeting}>view greeting</Button>
            <Button>Claim your Free NFT</Button>
            {address}
        </div>
    );
};
