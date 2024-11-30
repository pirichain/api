import {createNewAddress} from "./createNewAddress";
import {rescuePrivateKey, RescuePrivateKeyResponse} from "./rescuePrivateKey";
import {getMnemonic, MnemonicResponse} from "./getMnemonic";
import {FetchResponse} from "../config/response";


export default class Wallet extends FetchResponse {
    constructor(baseURL: string) {
        super(baseURL);
    }

    createNewAddress = (language: string = 'english') => createNewAddress(language);

    getBalance(address: string, assetID: number = -1): Promise<any> {
        return this.postResponse("/getBalance", {
            'address': address,
            'assetID': assetID
        });
    }

    getBalanceList(address: string): Promise<any> {
        return this.postResponse("/getBalanceList", {
            "address": address
        });
    }

    getMnemonic = (privateKey: string, language: string = 'english'): MnemonicResponse => getMnemonic(privateKey, language);

    rescuePrivateKey = (words: string, language: string = 'english'): RescuePrivateKeyResponse => rescuePrivateKey(words, language);

    convertToCommercialWallet(address: string, privateKey: string, alias: string): Promise<any> {
        return this.postResponse('/convertToCommercialWallet', {
            'address': address,
            'privateKey': privateKey,
            'alias': alias
        });
    }
}
