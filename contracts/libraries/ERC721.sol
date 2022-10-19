// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../interface/IERC721.sol";

// building the minting function:
// 1. nft to point to an address
// 2. keep track of the token ids
// 3. keep track of token owner addresses to token ids
// 4. keep track of how many tokens an owner address has
// 5. create an event that emits a transfter log
//     - contract address,
//     - where it is being minted to,
//     - the id

contract ERC721 {
    // keep track where its coming from, where its going
    // creating log
    // will inherit from IERC721
    event Transfer(address from, address to, uint256 tokenId);

    event Approval(
        address indexed owner,
        address indexed approved,
        uint256 indexed tokenId
    );

    // Mapping token ID to owner address
    mapping(uint256 => address) private _tokenOwner;

    // Mapping owner address to token count
    // _balances: in openzepplineERC721
    mapping(address => uint256) private _OwnedTokensCount;

    // Mapping from token Id to approved address
    mapping(uint256 => address) private _tokenApprovals;
    /*
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - `to` cannot be the zero address.
     */
    function _mint(address to, uint256 tokenId) internal virtual {
        // requires that the address isn't zero
        require(to != address(0), "ERC721: mint to the zero address");

        // token does not already exist
        require(!_exists(tokenId), "ERC721: token already minted");

        // adding new address with token id for minting
        _tokenOwner[tokenId] = to;
        // keeping track of each address that is minting and adding one
        _OwnedTokensCount[to] += 1;

        // Emits a {Transfer} event.
        emit Transfer(address(0), to, tokenId);
    }

    // require token is not minted, check if it exist, check tokenId exist
    function _exists(uint256 tokenId) internal view returns (bool) {
        // setting the address of nft owner to check the mapping
        // of the address from tokeOnwer at the tokenId
        address owner = _tokenOwner[tokenId];
        // return address is not zero
        return owner != address(0);
    }

    /// @notice Count all NFTs assigned to an owner
    /// @dev NFTs assigned to the zero address are considered invalid, and this
    ///  function throws for queries about the zero address.
    /// @param _owner An address for whom to query the balance
    /// @return The number of NFTs owned by `_owner`, possibly zero
    function balanceOf(address _owner) public view returns (uint256) {
        require(
            _owner != address(0),
            "ERC721: address zero is not a valid owner"
        );
        return _OwnedTokensCount[_owner];
    }

    /// @notice Find the owner of an NFT
    /// @dev NFTs assigned to zero address are considered invalid, and queries
    ///  about them do throw.
    /// @param _tokenId The identifier for an NFT
    /// @return The address of the owner of the NFT
    function ownerOf(uint256 _tokenId) public view returns (address) {
        address owner = _ownerOf(_tokenId);
        require(owner != address(0), "ERC721: invalid token ID");
        return owner;
    }

    function _ownerOf(uint256 _tokenId)
        internal
        view
        virtual
        returns (address)
    {
        return _tokenOwner[_tokenId];
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) public {
        _transferFrom(_from, _to, _tokenId);
    }

    function _transferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) internal {
        require(
            _to != address(0),
            "Error - ERC721 Transfer to the zero address"
        );
        require(
            ownerOf(_tokenId) == _from,
            "Trying to transfer a token the does not exist"
        );

        _OwnedTokensCount[_from] -= 1;
        _OwnedTokensCount[_to] += 1;

        _tokenOwner[_tokenId] = _to;
        emit Transfer(_from, _to, _tokenId);
    }

    // person approving is the owner 
    // approve an address  to a token (tokenId)
    // require that we can't approve sending tokens of the owner to the owner
    // update the map of the approval addresses
    function approve(address _to, uint256 _tokenId) public {
        address owner = _ownerOf(_tokenId);
        require(_to != owner, "Error - approval to current owner");
        require(msg.sender == owner, 'Current caller is not the owner');
        _tokenApprovals[_tokenId] = _to;

        emit Approval(owner, _to, _tokenId);
    }

    // function isApprovedOrOwner(address _spender,  uint256 _tokenId) internal view returns(bool) {
    //     require(_exists(_tokenId), 'token does not exist');
    //     address owner = ownerOf(_tokenId);
    //     // require(_spender == owner || getApproved(_tokenId) == spender);
    // }
}
