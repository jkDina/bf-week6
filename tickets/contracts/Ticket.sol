pragma solidity ^0.4.23;
import "./ERC721Extended.sol";

contract Ticket is ERC721Token {
  uint price;
  address owner;
  
  constructor (string _name, string _symbol) public ERC721Token(_name, _symbol) {
      price = 10 finney;
	  owner = msg.sender;
  }

  function createNewToken(string data) public payable {
      require(msg.value == price);
      uint tokenId = uint(sha3(data));
      require(!exists(tokenId));
      _mint(msg.sender, tokenId);
      address(owner).transfer(msg.value);
  }
}