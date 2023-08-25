const hre = require("hardhat")

async function main() {}

main()
   .then(() => {
      process.exit(0)
   })
   .catch((error) => {
      console.error("Error happend")
      console.log(error)
      process.exitCode = 1
   })
