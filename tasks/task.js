const { task } = require("hardhat/config")

task("accounts", "get all development accounts").setAction(
   async (args, hre) => {
      const accounts = await hre.ethers.getSigners()

      for (let account of accounts) {
         console.log(account.address)
         console.log("=============")
      }
   }
)
