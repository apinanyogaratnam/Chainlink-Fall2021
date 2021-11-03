import logo from './logo.svg';
import './App.css';
import { DAppProvider, ChainId } from '@usedapp/core';
import { Header } from './components/Header';
import getBlockchain from './ethereum.js';
import { useState } from 'react';

function App() {
  const [greeter, setGreeter] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { obj } = await getBlockchain();
      setGreeter(obj);
    };
    init();
  }, []);

  if (typeof greeter === 'undefined') {
    return 'Loading...';
  }

  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Mainnet, ChainId.Localhost, ChainId.Rinkeby]
    }}>
      <Header />
    </DAppProvider>
  );
}

export default App;
