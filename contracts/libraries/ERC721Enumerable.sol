// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./ERC721.sol";

contract ERC721Enumerable is ERC721 {

    uint256[] private _allTokens;

    // mapping from tokenID to position in _allTokens array
    mapping(uint256 => uint256) private _allTokenIndex;

    // mapping of onwer to list of all owner token ids
    mapping(address => uint256[]) private _ownedTokens;

    // mapping from token Id of the ownerToken list
    mapping(uint256 => uint256) private _ownedTokensIndex;

    /// @notice Count NFTs tracked by this contract
    /// @return A count of valid NFTs tracked by this contract, where each one of
    ///  them has an assigned and queryable owner not equal to the zero address
    function totalSupply() public view returns (uint256){
        return _allTokens.length;
    }

    /// @notice Enumerate valid NFTs
    /// @dev Throws if `_index` >= `totalSupply()`.
    /// @param _index A counter less than `totalSupply()`
    /// @return The token identifier for the `_index`th NFT,
    ///  (sort order not specified)
    function tokenByIndex(uint256 _index) public view returns (uint256){
        require(_index < totalSupply(), 'global index is out of bound!');
        return _allTokens[_index];
    }
    /// @notice Enumerate NFTs assigned to an owner
    /// @dev Throws if `_index` >= `balanceOf(_owner)` or if
    ///  `_owner` is the zero address, representing invalid NFTs.
    /// @param _owner An address where we are interested in NFTs owned by them
    /// @param _index A counter less than `balanceOf(_owner)`
    /// @return The token identifier for the `_index`th NFT assigned to `_owner`,
    ///   (sort order not specified)
    function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256){
        require(_index < balanceOf(_owner), 'Owner index is out of bound!');
        return _ownedTokens[_owner][_index];
    }
    // make it virtual, as we need same mint from ERC721
    function _mint(address to, uint256 tokenId) internal override(ERC721) {
        super._mint(to, tokenId);
        _addTokensToAllTokenEnumeration(tokenId);
        _addTokensToOwnerEnumeration(to, tokenId);
    }

    function _addTokensToAllTokenEnumeration(uint256 tokenId) private {
        _allTokenIndex[tokenId] = _allTokens.length;
        _allTokens.push(tokenId);
    }

    function _addTokensToOwnerEnumeration(address to,uint256 tokenId) private {
        _ownedTokensIndex[tokenId] = _ownedTokens[to].length;
        _ownedTokens[to].push(tokenId);
    }

}