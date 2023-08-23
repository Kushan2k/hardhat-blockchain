const hre = require("hardhat")

async function main() {
   const contract = await hre.ethers.getContractFactory("FundMe")

   //deploying contract
   console.log("Deploying FundMe...")
   const FundMe = await contract.deploy()
   const address = await FundMe.getAddress()

   console.log("FundMe deployed to:", address)
}

main()
   .then(() => {
      process.exit(0)
   })
   .catch((error) => {
      console.error("Error happend")
      console.log(error)
      process.exitCode = 1
   })
