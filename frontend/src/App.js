import { WagmiConfig, createConfig, sepolia } from 'wagmi';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';
import Swap from './components/Swap';
import AddLiquidity from './components/AddLiquidity';
import Header from './components/Header';

const { connectors } = getDefaultWallets({
  appName: 'DexApollo',
  projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID',
  chains: [sepolia]
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient: publicProvider(),
});

function App() {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={[sepolia]}>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Swap />
              <AddLiquidity />
            </div>
          </main>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
