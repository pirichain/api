const {createNewAddress} = require("./createNewAddress");
const {getBalance} = require("./getBalance");
const {getBalanceList} = require("./getBalanceList");
const {getMnemonic} = require("./getMnemonic");
const {rescuePrivateKey} = require("./rescuePrivateKey");

module.exports = {
    createNewAddress : createNewAddress,
    getBalance: getBalance,
    getBalanceList: getBalanceList,
    getMnemonic: getMnemonic,
    rescuePrivateKey: rescuePrivateKey
}