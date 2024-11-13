import { ec, base58, bip39 } from '../utility/modules';
import { base58extracted } from "./utility";
export function createNewAddress(language) {
    const key = ec.genKeyPair();
    const prefix = '83';
    let publicKey = key.getPublic('hex');
    let _publicKey = publicKey;
    const privateKey = key.getPrivate('hex');
    const resultStr = base58extracted(publicKey, prefix);
    const b58 = base58.encode(resultStr, prefix);
    bip39.setDefaultWordlist(language);
    const words = bip39.entropyToMnemonic(privateKey);
    return { data: { pri: privateKey, pub: 'PR' + b58, words: words, publicKey: _publicKey } };
}
