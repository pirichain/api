const {createNewAddress} = require("./createNewAddress");
const {getMnemonic} = require("./getMnemonic");
const {rescuePrivateKey} = require("./rescuePrivateKey");

class Wallet {
    client;
    constructor(client) {
        this.client = client;
    }

    createNewAddress = async (language = 'english') => await createNewAddress(language);

    getBalance(address, assetID = -1) {
        return this.client.post("/getBalance", {
            'address': address,
            'assetID': assetID
        })
    }

    getBalanceList(address) {
        return this.client.post("/getBalanceList", {
            "address": address
        })
    }

    getMnemonic = (privateKey, language = 'english') => getMnemonic(privateKey, language);
    rescuePrivateKey = async (words, language = 'english') => rescuePrivateKey(words, language)

    convertToCommercialWallet(address, privateKey, alias) {
        return this.client.post('/convertToCommercialWallet', {
            'address': address,
            'privateKey': privateKey,
            'alias': alias
        })
    }
}

module.exports = Wallet;
