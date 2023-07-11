const {getDetailsOfAddress} = require('./getDetailsOfAddress');
const {getTransaction} = require('./getTransaction');
const {listPoolTransactions} = require('./listPoolTransactions');
const {listTransactions} = require('./listTransactions');
const {listTransactionsByAddr} = require('./listTransactionsByAddr');
const {listTransactionsByAssetID} = require('./listTransactionsByAssetID');
const {getPoolTransaction} = require("./getPoolTransaction");

module.exports  = {
    getDetailsOfAddress: getDetailsOfAddress,
    getTransaction: getTransaction,
    listPoolTransactions: listPoolTransactions,
    listTransactions: listTransactions,
    listTransactionsByAddr: listTransactionsByAddr,
    listTransactionsByAssetID: listTransactionsByAssetID,
    getPoolTransaction: getPoolTransaction
}