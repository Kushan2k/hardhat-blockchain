const { ethers, network } = require("hardhat")
const { assert } = require("chai")

describe("test deploy fundme", async () => {
   if (network.config.chainId === 1337) {
      return
   }

   let FundMe, factory
   const address = "0x618E91f76c173Fc15b5E2F430c324fF121F94A54"
   beforeEach(async () => {
      factory = await ethers.getContractFactory("FundMe")
      FundMe = factory.attach(address)
   })

   it("get donted count", async () => {
      const expect = "0"
      const count = await FundMe.donetionCount()

      // console.log(count)

      assert.equal(count.toString(), expect)
   })

   it("get owner", async () => {
      const ownerAddress = "0x669406ff143A2869D3709c888AF6eA15a419c498"

      const contractOwner = await FundMe.viewOwner()

      assert.equal(
         contractOwner,
         ownerAddress,
         "you are not the owner of this contract"
      )
   })
})
