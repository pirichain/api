import sanitize from "mongo-sanitize";
import * as bip39 from "bip39";
import { createNewAddress } from "./createNewAddress";
import { getPubKeyFromPrivate, convertToBase58 } from "./utility";

export interface RescuePrivateKeyResponse {
    data: {
        error?: number;
        message?: string;
        pri?: string;
        base58?: { pub: string, base58: string };
        pub?: string;
    };
}

export function rescuePrivateKey(words: string, language: string = 'english'): RescuePrivateKeyResponse {
    if (language) {
        try {
            language = sanitize(language);
            bip39.setDefaultWordlist(language);
        } catch (e) {
            return {
                data: {
                    error: 1,
                    message: 'Definition of Language is Incorrect! You can define portuguese, english, french, korean, spanish, italian, japanese, chinese_traditional'
                }
            };
        }
    } else {
        bip39.setDefaultWordlist('english');
    }

    words = sanitize(words);
    let pri = '';
    try {
        pri = bip39.mnemonicToEntropy(words);
        let pubKey = getPubKeyFromPrivate(pri);
        if (!pubKey) {
            throw new Error('Public key generation failed');
        }
        let base58 = convertToBase58(pubKey);
        return {data: {pri: pri, base58: base58}};
    } catch (e) {
        const result = createNewAddress(language);
        return {data: {pri: result.data.pri, pub: result.data.pub}};
    }
}
