// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import './libraries/ERC721Connector.sol';

contract userArtistContract is ERC721Connector {

  // array to store our nfts
  string[] public artistLabels;

  // mapping
  mapping(string => bool) _artistLabelExists;

  function mint(string memory _artistLabel) public {
    // this is deprecated uint _id = artistLabels.push(_artistLabel);
    // .push no longer returns the length of ref to added element
    require(!_artistLabelExists[_artistLabel], "Error - Artistlabel already exist");

    artistLabels.push(_artistLabel);
    uint _id = artistLabels.length - 1;

    _mint(msg.sender, _id);

    // keeping track of the ids.
    _artistLabelExists[_artistLabel] = true;
  }

  constructor() ERC721Connector('UKN ARTIST', 'TRDUSD') {
     
  }
}