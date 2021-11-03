import { ethers, Contract } from 'ethers';
import Greeter from './Greeter.json';

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if(window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signerAddress = await signer.getAddress();
        const greeter = new Contract(
          Greeter.address,
          Greeter.abi,
          signer
        );

        resolve({signerAddress, greeter});
      }
      resolve({signerAddress: undefined, greeter: undefined});
    });
  });

export default getBlockchain;