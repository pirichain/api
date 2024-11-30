"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createNewAddress_1 = require("./createNewAddress");
const rescuePrivateKey_1 = require("./rescuePrivateKey");
const getMnemonic_1 = require("./getMnemonic");
const response_1 = require("../config/response");
class Wallet extends response_1.FetchResponse {
    constructor(baseURL) {
        super(baseURL);
        this.createNewAddress = (language = 'english') => (0, createNewAddress_1.createNewAddress)(language);
        this.getMnemonic = (privateKey, language = 'english') => (0, getMnemonic_1.getMnemonic)(privateKey, language);
        this.rescuePrivateKey = (words, language = 'english') => (0, rescuePrivateKey_1.rescuePrivateKey)(words, language);
    }
    getBalance(address, assetID = -1) {
        return this.postResponse("/getBalance", {
            'address': address,
            'assetID': assetID
        });
    }
    getBalanceList(address) {
        return this.postResponse("/getBalanceList", {
            "address": address
        });
    }
    convertToCommercialWallet(address, privateKey, alias) {
        return this.postResponse('/convertToCommercialWallet', {
            'address': address,
            'privateKey': privateKey,
            'alias': alias
        });
    }
}
exports.default = Wallet;
//# sourceMappingURL=index.js.map