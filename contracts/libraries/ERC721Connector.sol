// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./ERC721MetaData.sol";
import "./ERC721.sol";
contract ERC721Connector is ERC721MetaData, ERC721 {
    // when every deploy connector, we want to carry the meta-data
    constructor(string memory name, string memory symbol)
        ERC721MetaData(name, symbol)
    {}
}
