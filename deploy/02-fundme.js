const { network, ethers } = require("hardhat")
const { getActiveChain } = require("../helder.hardhat.config")

module.exports = async ({ getNamedAccounts, deployments }) => {
   if (getActiveChain(network.name)) {
      await deployments.fixture(["all"])
   }
   const { deployer } = await getNamedAccounts()

   const FundMe = await ethers.getContract("FundMe", deployer)

   const ethprice = await FundMe.getEthtoUSD()

   console.log(`current ETH to USD price ${ethprice}`)
}
module.exports.tags = ["fundme"]
