const { ethers, network, deployments, getNamedAccounts } = require("hardhat")
const { assert, expect } = require("chai")
const { getActiveChain } = require("../helder.hardhat.config")

describe("test deploy fundme", async () => {
   if (!getActiveChain(network.name)) {
      console.log("Not a Development chain")
      return
   }

   if (network.name == "hardhat") {
      console.log("Hardhat development chain detected!")
      return
   }

   // await deployments.fixture(["all"])

   let FundMe, deployer

   beforeEach(async () => {
      deployer = (await getNamedAccounts()).deployer
      FundMe = await ethers.getContract("FundMe", deployer)
   })

   it("get donted count", async () => {
      const initinalCount = 1
      const donetedCount = await FundMe.donetionCount()

      expect(donetedCount).to.equal(initinalCount)
   })

   it("get owner", async () => {
      const owner = await FundMe.viewOwner()

      assert.equal(owner, deployer)
   })
})
