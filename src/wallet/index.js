const {createNewAddress} = require("./createNewAddress");
const {getMnemonic} = require("./getMnemonic");
const {rescuePrivateKey} = require("./rescuePrivateKey");

class Wallet {
    constructor(client) {
        this.client = client;
    }

    createNewAddress = async () => await createNewAddress();

    getBalance(address, assetID) {
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
        if (!this.client.headers.isMainNet)
            return this.client.post('/convertToCommercialWallet', {
                'address': address,
                'privateKey': privateKey,
                'alias': alias
            })
        else return new Promise(resolve => resolve({error: 1, message: 'This method can be used in the Pirichain TestNet Environment!'}))
    }
}

module.exports = Wallet;
