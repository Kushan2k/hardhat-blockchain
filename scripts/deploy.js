const hre = require("hardhat")

async function main() {
   const contract = await hre.ethers.deployContract("Lock")

   const ad = await contract.waitForDeployment()
}

main()
   .then(() => {
      process.exit(0)
   })
   .catch((error) => {
      console.error("Error happend")
      process.exitCode = 1
   })
