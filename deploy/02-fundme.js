const { network, ethers } = require("hardhat")
const { getActiveChain } = require("../helder.hardhat.config")

module.exports = async ({ getNamedAccounts, deployments }) => {
   const { deployer } = await getNamedAccounts()

   const doneteAmount = ethers.parseEther("0.5")

   //get the deployed contract
   const FundMe = await ethers.getContract("FundMe", deployer)

   //donete 0.1 ether using the same account
   const tx = await FundMe.donate({
      value: doneteAmount,
      log: true,
   })
   await tx.wait(1)
   console.log(`0.5 ether doneted from ${deployer}`)

   const address = await FundMe.getAddress()
   //get the balance
   const balance = await ethers.provider.getBalance(address)
   console.log(`Balance is ${balance} Wei`)

   //conver to ehter
   // const eth = parseFloat(ethers.formatEther(balance))
   //get the current eth price
   const currentPrice = await FundMe.getEthtoUSD()

   //balance in uSD
   console.log(`current ETH to USD $${currentPrice}`)
   // console.log(`Balance in contract is $${currentPrice * eth}`)

   //get the donetated count
   const count = await FundMe.donetionCount()
   console.log(`donetion count is ${count}`)
}
module.exports.tags = ["fundme"]
