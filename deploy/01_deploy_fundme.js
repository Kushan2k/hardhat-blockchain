const { priceFeedAddress, getActiveChain } = require("../helder.hardhat.config")
const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
   if (getActiveChain(network.name)) {
      console.log("Development chains, skipping....")
      return
   }

   const { deploy } = deployments
   const { deployer } = await getNamedAccounts()

   //get the price feed addres depending on the chain id
   const priceFeed = priceFeedAddress[network.config.chainId]["address"]

   const FundMe = await deploy("FundMe", {
      from: deployer,
      args: [priceFeed],
      log: true,
   })
}

module.exports.tags = ["all", "deploy"]
