require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomicfoundation/hardhat-ethers")
require("./tasks/task")
require("hardhat-gas-reporter")

require("@nomiclabs/hardhat-ethers")
require("hardhat-deploy")

const INFURA_API_KEY = process.env.INFURA_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: "0.8.9",
   networks: {
      sepolia: {
         url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
         accounts: [PRIVATE_KEY],
      },
      hardhat: {
         chainId: 1337,
      },
      localhost: {
         url: "http://127.0.0.1:8545/",
      },
   },
   gasReporter: {
      enabled: true,
      outputFile: "report.txt",
      noColors: true,
   },
   namedAccounts: {
      deployer: {
         default: 0,
      },
   },
}
