const { ethers, network, deployments, getNamedAccounts } = require("hardhat")
const { assert } = require("chai")
const { getActiveChain } = require("../helder.hardhat.config")

describe("test deploy fundme", async () => {
   if (!getActiveChain(network.name)) {
      console.log("Skipping test")
      describe.skip
   }
   await deployments.fixture(["all"])

   let FundMe, deployer

   beforeEach(async () => {
      deployer = (await getNamedAccounts()).deployer
      FundMe = ethers.getContract("FundMe", deployer)
   })

   it("get donted count", async () => {
      const expect = 0

      const actual = await FundMe.donetionCount()

      assert.equal(actual, expect)
   })

   it("get owner", async () => {
      assert.equal(FundMe.address, deployer)
   })
})
