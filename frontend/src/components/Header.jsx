import Button from '@material-ui/core/Button';
import Web3 from 'web3';
import { useState } from 'react';
import Greeter from '../Greeter.json';
import { activateWeb3, viewGreeting } from './web3Client';

export const Header = () => {

    const [isConnected, setIsConnected] = useState(true);

    const mintStream = async (e) => {
        e.preventDefault();

        const nftPortApiKey = process.env.REACT_APP_NFT_PORT_API_KEY;
        const urlToMint = "https://api.nftport.xyz/v0/mints/easy/urls"
        const body = {
          "chain": "rinkeby",
          "name": nameOfNft,
          "description": descriptionOfNft,
          "file_url": streamUrl,
          "mint_to_address": address
        };
  
        const auth = {
          headers: {
            Authorization: nftPortApiKey
          }
        };
  
        const res = await axios.post(urlToMint, body, auth);
        
        if (res.status === 200) {
          alert("Successfully minted stream");
          setNameOfNft("");
          setDescriptionOfNft("");
          // setAddress("");
          setNftDeployedUrl(res.data.transaction_external_url);
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
            <Button onClick={viewGreeting}>view greeting</Button>
        </div>
    );
};