// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import './ERC721MetaData.sol';

contract ERC721Connector is ERC721MetaData {
  constructor(string memory name, string memory symbol) ERC721MetaData() {

  }
}
