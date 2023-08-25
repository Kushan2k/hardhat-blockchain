const priceFeedAddress = {
   4: {
      name: "rinkby",
      address: "",
   },

   11155111: {
      name: "sepolia",
      address: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
   },
}

const getActiveChain = (name) => {
   const dev = ["hardhat", "localhost"]

   return dev.includes(name)
}

module.exports = {
   priceFeedAddress,
   getActiveChain,
}
