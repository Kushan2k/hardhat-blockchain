const hre = require("hardhat")

async function main() {
   //sepolia address
   // const address = "0x618E91f76c173Fc15b5E2F430c324fF121F94A54"

   //localhost address tempory
   const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

   const factory = await hre.ethers.getContractFactory("FundMe")

   const FundMe = factory.attach(address)

   //start ineracting
   const owner = await FundMe.viewOwner()

   console.log(`owner is : ${owner}`)

   //getting all the accounts
   const accounts = await hre.ethers.getSigners()
   const deployedaccount = accounts[0]

   //doneting ether using tha same account used for deployment
   //  await FundMe.donate({
   //     value: hre.ethers.parseEther("0.001"),
   //  })

   //checking how much i've doneted
   const amount = await FundMe.getDonetions(deployedaccount)
   console.log(`account ${deployedaccount.address} has doneted: ${amount}`)
}

main()
   .catch((er) => {
      console.log(er)
      process.exit(1)
   })
   .catch(() => {
      process.exit(0)
   })
