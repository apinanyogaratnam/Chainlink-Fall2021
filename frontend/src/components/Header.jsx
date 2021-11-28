import Button from '@material-ui/core/Button';
import Web3 from 'web3';
import { useState } from 'react';
import Greeter from '../Greeter.json';
import { activateWeb3, viewGreeting } from './web3Client';
import WeMetaImage from './image.png';
import axios from 'axios';

export const Header = () => {

    const [isConnected, setIsConnected] = useState(null);
    const [address, setAddress] = useState('');
    const [deployedNFT, setDeployedNFT] = useState(null);
    const [isBalances, setIsBalances] = useState(null);

    const moralis = async (e) => {
        e.preventDefault();
        const url = `https://deep-index.moralis.io/api/v2/${address}/erc20?chain=eth`;
        const headers = {
            'x-api-key': process.env.REACT_APP_MORALIS_API_KEY,
            accept: 'application/json'
        }

        const res = await axios.get(url, {headers});
        setIsBalances(res.data);
    }

    const mintStream = async (e) => {
        e.preventDefault();
        // if (!isConnected) {
        //     alert('Please connect to MetaMask');
        //     return;
        // }

        const nftPortApiKey = process.env.REACT_APP_NFT_PORT_API_KEY;
        console.log(nftPortApiKey);
        const urlToMint = "https://api.nftport.xyz/v0/mints/easy/urls";
        const wemetaImageUrl = "https://wemeta.world/WeMeta.png";
        const body = {
            "chain": "rinkeby",
            "name": "WeMeta ETF", // update to user's preferred nft name
            "description": "Free claimed WeMeta ETF", // update to user's preferred nft description
            "file_url": wemetaImageUrl,
            "mint_to_address": address // update to user's preferred address
          };
    
        const auth = {
            headers: {
                Authorization: nftPortApiKey
            }
        };
    
        const res = await axios.get(urlToMint, body, auth);
        
        if (res.status === 200) {
          alert("Successfully minted your free NFT");
          const urlOfNFTDeployed = res.data.transaction_external_url;
          console.log(urlOfNFTDeployed);
          setDeployedNFT(urlOfNFTDeployed);
        } else {
            alert("Something went wrong");
        }
    }

    const connectWallet = async () => {
        const address = await activateWeb3();
        setAddress(address);
        setIsConnected(true);
        console.log(address);
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
            <form>
                <input type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <Button onClick={e => mintStream(e)}>Claim your Free NFT</Button>
                <Button onClick={e => moralis(e)}>View balances</Button>
            </form>
            {
                deployedNFT ? <a href={deployedNFT}>View deployed NFT</a> : null
            }
            {
                isBalances ? <div>{JSON.stringify(isBalances)}</div> : null
            }
        </div>
    );
};
