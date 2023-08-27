const { ethers, network, deployments, getNamedAccounts } = require("hardhat")
const { assert, expect } = require("chai")
const { getActiveChain } = require("../helder.hardhat.config")

describe("test deploy fundme", async () => {
   //globle variables
   let FundMe, singer

   if (!getActiveChain(network.name)) {
      console.log("Not a Development chain")
      return
   }
   if (network.name == "hardhat") {
      console.log("Hardhat development chain detected!")
      await deployments.fixture(["all"])
   }

   beforeEach(async () => {
      singer = (await getNamedAccounts()).deployer
      FundMe = await ethers.getContract("FundMe", singer)
   })

   //testing donete function
   describe("Test Donete function", async () => {
      it("initial donetion count", async () => {
         const init = "1"
         const count = await FundMe.donetionCount()

         assert.equal(count.toString(), init)
      })

      it("increate the donete count", async () => {
         const donetion = ethers.parseEther("0.5")

         await FundMe.donate({ value: donetion })

         const initialCount = "2"
         const newCount = await FundMe.donetionCount()

         assert.equal(newCount.toString(), initialCount)
      })
      it("contract balance", async () => {
         const expectedbalance = ethers.parseEther("1.0").toString()

         const address = await FundMe.getAddress()

         const balance = await ethers.provider.getBalance(address)

         assert.equal(balance.toString(), expectedbalance)
      })
   })

   //testing getowner function

   describe("Testing getowner function", async () => {
      it("check owner address", async () => {
         const owner = singer
         const contractOwner = await FundMe.viewOwner()

         assert.equal(contractOwner, owner)
      })
   })

   //testing getDonetions function
   describe("Testing getDonetions function for a account", async () => {
      it("get doneted amount", async () => {
         const amountDoneted = ethers.parseEther("1.0")

         const recorderAmount = await FundMe.getDonetions(singer)

         assert.equal(recorderAmount.toString(), amountDoneted.toString())
      })
   })

   describe("Testing withdraw function", async () => {
      it("try to withdraw not the owner", async () => {
         const notOwner = await ethers.getSigners()[1]

         await FundMe.connect(notOwner)
         const tx = await FundMe.withdraw()

         expect(tx).to.revertedWith("You are not the owner")
      })

      it("withdar with right owner account", async () => {
         const expected = ethers.parseEther("0").toString()
         const address = await FundMe.getAddress()
         const newBalance = await ethers.provider.getBalance(address)

         assert.equal(newBalance.toString(), expected)
      })
   })
})
