const { priceFeedAddress, getActiveChain } = require("../helder.hardhat.config")
const { network, deployments } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
   let priceFeed
   if (getActiveChain(network.name)) {
      console.log("Deployment chain detected!")
      const MockV3 = await deployments.get("MockV3Aggregator")
      priceFeed = MockV3.address
   } else {
      //get the price feed addres depending on the chain id
      priceFeed = priceFeedAddress[network.config.chainId]["address"]
   }

   const { deploy } = deployments
   const { deployer } = await getNamedAccounts()

   await deploy("FundMe", {
      from: deployer,
      args: [priceFeed],
      log: true,
   })
}

module.exports.tags = ["all", "deploy"]
