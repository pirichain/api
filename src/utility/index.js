const {isValidAddress} = require('./isValidAddress');
const {search} = require('./search');
const {verifyAddress} = require("./verifyAddress");
module.exports = {
    isValidAddress: isValidAddress,
    search: search,
    verifyAddress: verifyAddress
}
