const Ehr = artifacts.require("./EHR.sol");

module.exports = function (deployer) {
    deployer.deploy(Ehr);
};