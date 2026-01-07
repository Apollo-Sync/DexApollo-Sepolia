async function main() {
  const factoryAddress = "0x..."; // Điền address Factory đã deploy
  const wethAddress = "0x...";     // Điền address WETH đã deploy

  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy(factoryAddress, wethAddress);
  await router.deployed();

  console.log("UniswapV2Router02 deployed to:", router.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
