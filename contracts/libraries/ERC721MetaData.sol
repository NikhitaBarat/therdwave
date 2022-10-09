// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract ERC721MetaData {

    string private _name;
  
    string private _symbol;

    constructor(string memory named, string memory symbolified) {
        _name = named;
        _symbol = symbolified;
    }

    // function returns the name
    function name() external view returns (string memory) {
        return _name;
    }

    // function returns symbol
    function symbol() external view returns (string memory) {
        return _symbol;
    }
}
