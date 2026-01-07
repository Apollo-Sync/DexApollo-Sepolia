// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WETH is ERC20 {
    constructor() public ERC20("Wrapped Ether", "WETH") {}

    receive() external payable {
        deposit();
    }

    function deposit() public payable {
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint wad) public {
        require(balanceOf(msg.sender) >= wad);
        _burn(msg.sender, wad);
        msg.sender.transfer(wad);
    }
}
