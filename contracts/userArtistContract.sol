// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import './ERC721Connector.sol';

contract userArtistContract is ERC721Connector {

  string public userName;
  string public artistName;

  constructor() ERC721Connector('UKN ARTIST', 'TRDUSD') {
    artistName = "Unknown Artist";
    userName = "Unknown User";
  }
}