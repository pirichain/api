import { createNewAddress } from "./createNewAddress";
import { rescuePrivateKey } from "./rescuePrivateKey";
import { getMnemonic } from "./getMnemonic";
import { FetchResponse } from "../config/response";
export default class Wallet extends FetchResponse {
    constructor(client) {
        super(client);
    }
    createNewAddress = (language = 'english') => createNewAddress(language);
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
    getMnemonic = (privateKey, language = 'english') => getMnemonic(privateKey, language);
    rescuePrivateKey = (words, language = 'english') => rescuePrivateKey(words, language);
    async convertToCommercialWallet(address, privateKey, alias) {
        return this.postResponse('/convertToCommercialWallet', {
            'address': address,
            'privateKey': privateKey,
            'alias': alias
        });
    }
}
