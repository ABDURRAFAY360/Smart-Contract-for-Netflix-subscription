// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
  
// Creating a contract
contract NetflixClass
{
  uint public Amount;
  address payable Netflix;
  constructor() public {
    Netflix = payable(msg.sender);
  }
  function Charge() public payable{
    Netflix.send(msg.value);
  }
}