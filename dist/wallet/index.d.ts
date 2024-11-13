import { RescuePrivateKeyResponse } from "./rescuePrivateKey";
import { MnemonicResponse } from "./getMnemonic";
import { FetchResponse } from "../config/response";
import { AxiosInstance } from '../utility/modules';
export default class Wallet extends FetchResponse {
    constructor(client: AxiosInstance);
    createNewAddress: (language?: string) => {
        data: {
            pri: string;
            pub: string;
            words: string;
            publicKey: string;
        };
    };
    getBalance(address: string, assetID?: number): Promise<any>;
    getBalanceList(address: string): Promise<any>;
    getMnemonic: (privateKey: string, language?: string) => MnemonicResponse;
    rescuePrivateKey: (words: string, language?: string) => RescuePrivateKeyResponse;
    convertToCommercialWallet(address: string, privateKey: string, alias: string): Promise<any>;
}
