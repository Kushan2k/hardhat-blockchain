require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomicfoundation/hardhat-ethers")
require("./tasks/task")
require("hardhat-gas-reporter")

require("@nomiclabs/hardhat-ethers")
require("hardhat-deploy")

const INFURA_API_KEY = process.env.INFURA_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const TW_MNUMONIC = process.env.TW_PNUMONIC

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: {
      compilers: [{ version: "0.8.9" }, { version: "0.8.0" }],
   },
   networks: {
      sepolia: {
         url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
         accounts: [PRIVATE_KEY],
         chainId: 11155111,
      },
      hardhat: {
         chainId: 1337,
      },
      localhost: {
         url: "http://127.0.0.1:8545/",
         chainId: 1337,
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
   paths: {
      tests: "./test",
   },
}
