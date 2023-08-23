const { ethers } = require("hardhat")
const { assert } = require("chai")
describe("test deploy fundme", async () => {
   let FundMe, factory
   const address = "0x618E91f76c173Fc15b5E2F430c324fF121F94A54"
   beforeEach(async () => {
      factory = await ethers.getContractFactory("FundMe")
      FundMe = factory.attach(address)
   })

   it("get donted count", async () => {
      const expect = 0
      const count = await FundMe.donetionCount()

      assert.equal(count.toString(), expect)
   })
})
