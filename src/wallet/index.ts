import {createNewAddress} from "./createNewAddress";
import {rescuePrivateKey, RescuePrivateKeyResponse} from "./rescuePrivateKey";
import {getMnemonic, MnemonicResponse} from "./getMnemonic";
import {ApisauceInstance} from "apisauce";
import {FetchResponse} from "../../config/response";

class Wallet extends FetchResponse {
    constructor(client: ApisauceInstance) {
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
