const {createNewAddress} = require("./createNewAddress");
const {getMnemonic} = require("./getMnemonic");
const {rescuePrivateKey} = require("./rescuePrivateKey");

class Wallet {
    constructor(client) {
        this.client = client;
    }
    createNewAddress = async () => createNewAddress();
    getBalance(address, assetID) {
        return this.client.post("/getBalance", {
            'address': address,
            'assetID': assetID
        })
    }
    getBalanceList(address){
        return this.client.post("/getBalanceList", {
            "address": address
        })
    }
    getMnemonic = (privateKey, language = 'english') => getMnemonic(privateKey, language);

    rescuePrivateKey = async (words, language = 'english') => rescuePrivateKey(words, language)

}

module.exports = Wallet;
