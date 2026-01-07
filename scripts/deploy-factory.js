async function main() {
  const [deployer] = await ethers.getSigners();

  const Factory = await ethers.getContractFactory("UniswapV2Factory");
  const factory = await Factory.deploy(deployer.address); // feeToSetter = deployer
  await factory.deployed();

  console.log("UniswapV2Factory deployed to:", factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
