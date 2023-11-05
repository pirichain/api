import sanitize from 'mongo-sanitize';
import bip39 from 'bip39';
import { createNewAddress } from './createNewAddress';
import { getPubKeyFromPrivate, convertToBase58 } from './utility';

export async function rescuePrivateKey(words: string, language: string = 'english') {
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
        // @ts-ignore
        let base58 = convertToBase58(pubKey);
        return { data: { pri: pri, base58: base58 } };
    } catch (e) {
        const result = await createNewAddress();
        return { data: { pri: result.data.pri, pub: result.data.pub } };
    }
}
