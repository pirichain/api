import { RescuePrivateKeyResponse } from "./rescuePrivateKey";
import { MnemonicResponse } from "./getMnemonic";
import { FetchResponse } from "../config/response";
export default class Wallet extends FetchResponse {
    constructor(baseURL: string);
    createNewAddress: (language?: string, chainPrefix?: string) => {
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
    rescuePrivateKey: (words: string, language: string | undefined, chainPrefix: string) => RescuePrivateKeyResponse;
    convertToCommercialWallet(address: string, privateKey: string, alias: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map