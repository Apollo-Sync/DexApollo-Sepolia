require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.6.6",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/your-key",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
