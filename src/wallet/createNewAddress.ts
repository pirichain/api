import {base58extracted} from "./utility";

// @ts-ignore
import base58 from "base58check";
import * as bip39 from 'bip39';
import pkg from "elliptic";
const ec = new pkg.ec("secp256k1");

export function createNewAddress(language: string, chainPrefix?: string) : {data: {pri: string, pub: string, words: string, publicKey: string}} {
    const key = ec.genKeyPair();
    const prefix = '83';
    let publicKey = key.getPublic('hex');
    let _publicKey = publicKey;
    const privateKey = key.getPrivate('hex');
    const resultStr = base58extracted(publicKey, prefix);
    const b58 = base58.encode(resultStr, prefix);
    bip39.setDefaultWordlist(language);
    const words = bip39.entropyToMnemonic(privateKey);
    return {data: {pri: privateKey, pub: (chainPrefix ?? 'PR') + b58, words: words, publicKey: _publicKey}};
}
