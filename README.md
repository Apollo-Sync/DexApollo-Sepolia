**Tree folder**
```
DexApollo-Sepolia/
├── contracts/                  # Smart contracts (Hardhat)
│   ├── UniswapV2Factory.sol
│   ├── UniswapV2Pair.sol
│   ├── UniswapV2Router02.sol
│   ├── WETH.sol                # Wrapped ETH cho testnet
│   ├── MyToken.sol             # Token test (ERC20)
│   └── interfaces/             # Các interface từ Uniswap
│       ├── IUniswapV2Factory.sol
│       └── ...
├── scripts/                    # Scripts deploy (Hardhat)
│   ├── deploy-factory.js
│   ├── deploy-router.js
│   └── deploy-tokens.js
├── test/                       # Tests cho contracts
│   ├── factory.test.js
│   └── router.test.js
├── hardhat.config.js           # Config Hardhat (networks: sepolia, localhost)
├── package.json                # Dependencies: hardhat, ethers, @openzeppelin/contracts, @uniswap/v2-core, @uniswap/v2-periphery
├── .env                        # Private key, Alchemy/Infura URL (không commit!)
├── frontend/                   # React app (create-react-app hoặc Vite)
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Swap.js         # Component swap token
│   │   │   ├── AddLiquidity.js # Component add pool
│   │   │   ├── Header.js
│   │   │   └── WalletConnect.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── abi/                # ABI files từ contracts (Factory.json, Router.json, ...)
│   │   ├── constants/          # Addresses contracts sau deploy, chainId Sepolia
│   │   └── utils/              # Helpers ethers.js/wagmi
│   ├── package.json            # Dependencies: react, ethers, wagmi, @rainbow-me/rainbowkit, viem
│   └── .env                    # REACT_APP_... (nếu cần)
├── README.md
└── .gitignore
```
