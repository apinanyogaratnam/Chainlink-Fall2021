import logo from './logo.svg';
import './App.css';
import { DAppProvider, ChainId } from '@usedapp/core';
import { Header } from './components/Header';

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Mainnet, ChainId.Localhost, ChainId.Rinkeby]
    }}>
      <Header />
    </DAppProvider>
  );
}

export default App;
