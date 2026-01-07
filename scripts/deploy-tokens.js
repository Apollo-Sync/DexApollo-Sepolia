async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying tokens with:", deployer.address);

  const WETH = await ethers.getContractFactory("WETH");
  const weth = await WETH.deploy();
  await weth.deployed();
  console.log("WETH deployed to:", weth.address);

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(ethers.utils.parseEther("1000000"));
  await myToken.deployed();
  console.log("MyToken deployed to:", myToken.address);

  console.log("\nAddresses:");
  console.log(`WETH: ${weth.address}`);
  console.log(`APOLLO: ${myToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
