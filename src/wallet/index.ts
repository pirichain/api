import { createNewAddress } from './createNewAddress';
import { getMnemonic } from './getMnemonic';
import { rescuePrivateKey } from './rescuePrivateKey';

class Wallet {
    private client: any;

    constructor(client: any) {
        this.client = client;
    }

    async createNewAddress() {
        return createNewAddress();
    }

    getBalance(address: string, assetID: number) {
        return this.client.post('/getBalance', {
            address: address,
            assetID: assetID,
        });
    }

    getBalanceList(address: string) {
        return this.client.post('/getBalanceList', {
            address: address,
        });
    }

    getMnemonic(privateKey: string, language: string = 'english') {
        return getMnemonic(privateKey, language);
    }

    async rescuePrivateKey(words: string, language: string = 'english') {
        return rescuePrivateKey(words, language);
    }

    convertToCommercialWallet(address: string, privateKey: string, alias: string) {
        if (!this.client.headers.isMainNet) {
            return this.client.post('/convertToCommercialWallet', {
                address: address,
                privateKey: privateKey,
                alias: alias,
            });
        } else {
            return new Promise((resolve) => resolve({ error: 1, message: 'This method can be used in the Pirichain TestNet Environment!' }));
        }
    }
}

export default Wallet;
