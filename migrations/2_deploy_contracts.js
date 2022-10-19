const UserArtist = artifacts.require("userArtistContract")
// deploys contracts to the Ethereum network
module.exports = function(deployer) {
    deployer.deploy(UserArtist);
}