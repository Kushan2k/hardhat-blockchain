module.exports = async ({ getNamedAccounts, deployments }) => {
   const { deploy } = deployments
   const { deployer } = await getNamedAccounts()

   console.log(deployer)

   await deploy("FundMe", {
      from: deployer,
      logs: true,
   })
}
