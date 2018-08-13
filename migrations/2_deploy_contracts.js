var ALADToken = artifacts.require("./ALADToken.sol")
module.exports = function(deployer) {
  deployer.deploy(ALADToken);
};
