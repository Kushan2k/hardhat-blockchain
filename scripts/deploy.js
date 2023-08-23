const hre = require("hardhat")

async function main() {
   const contract = await hre.ethers.getContractFactory("FundMe")

   //deploying contract
   // console.log("Deploying FundMe...")
   // const FundMe = await contract.deploy()
   // const address = await FundMe.getAddress()

   const address = "0x618E91f76c173Fc15b5E2F430c324fF121F94A54"

   console.log("FundMe deployed to:", address)

   //attact the contract
   const FundMe = contract.attach(address)

   const owner = await FundMe.viewOwner()

   console.log(`owner is ${owner}`)
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
