"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    getBalance(address_1) {
        return __awaiter(this, arguments, void 0, function* (address, assetID = -1) {
            return yield this.postResponse("/getBalance", {
                'address': address,
                'assetID': assetID
            });
        });
    }
    getBalanceList(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getBalanceList", {
                "address": address
            });
        });
    }
    convertToCommercialWallet(address, privateKey, alias) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse('/convertToCommercialWallet', {
                'address': address,
                'privateKey': privateKey,
                'alias': alias
            });
        });
    }
}
exports.default = Wallet;
//# sourceMappingURL=index.js.map