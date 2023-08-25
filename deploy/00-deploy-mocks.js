const { getActiveChain } = require("../helder.hardhat.config")
const { network } = require("hardhat")

const DECIMALS = 8
const INIT_ETH_VALUE = 1700
module.exports = async ({ getNamedAccounts, deployments }) => {
   const { deployer } = await getNamedAccounts()
   const { deploy } = deployments

   if (getActiveChain(network.name)) {
      console.log("Deploying mocks")
      const ag = await deploy("MockV3Aggregator", {
         from: deployer,
         log: true,
         args: [DECIMALS, INIT_ETH_VALUE],
      })
      await deploy("FundMe", {
         from: deployer,
         args: [ag.address],
         log: true,
      })
      console.log("--------------------------------------")
   }
}

module.exports.tags = ["mock", "all"]
