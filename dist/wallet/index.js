"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const createNewAddress_1 = require("./createNewAddress");
const rescuePrivateKey_1 = require("./rescuePrivateKey");
const getMnemonic_1 = require("./getMnemonic");
const response_1 = require("../config/response");
class Wallet extends response_1.FetchResponse {
    constructor(client) {
        super(client);
        this.createNewAddress = (language = 'english') => (0, createNewAddress_1.createNewAddress)(language);
        this.getMnemonic = (privateKey, language = 'english') => (0, getMnemonic_1.getMnemonic)(privateKey, language);
        this.rescuePrivateKey = (words, language = 'english') => (0, rescuePrivateKey_1.rescuePrivateKey)(words, language);
    }
    async getBalance(address, assetID = -1) {
        return this.postResponse("/getBalance", {
            'address': address,
            'assetID': assetID
        });
    }
    async getBalanceList(address) {
        return this.postResponse("/getBalanceList", {
            "address": address
        });
    }
    async convertToCommercialWallet(address, privateKey, alias) {
        return this.postResponse('/convertToCommercialWallet', {
            'address': address,
            'privateKey': privateKey,
            'alias': alias
        });
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=index.js.map