// //TO-DO: update with crypto browser conf.
// const {createNewAddress} = require("./createNewAddress");
// const {getMnemonic} = require("./getMnemonic");
// const {rescuePrivateKey} = require("./rescuePrivateKey");

class Wallet {
    constructor(client) {
        this.client = client;
    }
    //TO-DO: update with crypto browser conf.
    // createNewAddress = async () => createNewAddress();
    createNewAddress(language = 'english'){
        return this.client.post("/createNewAddress", {
            language: language
        })
    }

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
    //TO-DO: update with crypto browser conf.
    // getMnemonic = (privateKey, language = 'english') => getMnemonic(privateKey, language);
    getMnemonic(privateKey, language = 'english'){
        return this.client.post("/getMnemonic", {
            privateKey: privateKey,
            language: language
        })
    }

    //TO-DO: update with crypto browser conf.
    // rescuePrivateKey = async (words, language = 'english') => rescuePrivateKey(words, language)
    rescuePrivateKey(words, language = 'english'){
        return this.client.post("/rescuePrivateKey", {
            words: words,
            language: language
        })
    }

}

module.exports = Wallet;
