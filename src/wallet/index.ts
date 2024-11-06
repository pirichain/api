import {createNewAddress} from "./createNewAddress";
import {rescuePrivateKey, RescuePrivateKeyResponse} from "./rescuePrivateKey";
import {getMnemonic, MnemonicResponse} from "./getMnemonic";
import {FetchResponse} from "../config/response";
import {AxiosInstance} from "axios";

interface IWallet {
    createNewAddress(language?: string): {data: {pri: string, pub: string, words: string, publicKey: string}};
    getBalance(address: string, assetID?: number): Promise<any>;
    getBalanceList(address: string): Promise<any>;
    getMnemonic(privateKey: string, language?: string): MnemonicResponse;
    rescuePrivateKey(words: string, language?: string): RescuePrivateKeyResponse;
    convertToCommercialWallet(address: string, privateKey: string, alias: string): Promise<any>;
}

class Wallet extends FetchResponse implements IWallet {
    constructor(client: AxiosInstance) {
        super(client);
    }

    createNewAddress = (language: string = 'english') => createNewAddress(language);

    async getBalance(address: string, assetID: number = -1): Promise<any> {
        return await this.postResponse("/getBalance", {
            'address': address,
            'assetID': assetID
        });
    }

    async getBalanceList(address: string): Promise<any> {
        return await this.postResponse("/getBalanceList", {
            "address": address
        });
    }

    getMnemonic = (privateKey: string, language: string = 'english'): MnemonicResponse => getMnemonic(privateKey, language);

    rescuePrivateKey = (words: string, language: string = 'english'): RescuePrivateKeyResponse => rescuePrivateKey(words, language);

    async convertToCommercialWallet(address: string, privateKey: string, alias: string): Promise<any> {
        return await this.postResponse('/convertToCommercialWallet', {
            'address': address,
            'privateKey': privateKey,
            'alias': alias
        });
    }
}

export default Wallet;
export {IWallet};
