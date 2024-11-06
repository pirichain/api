import {base58extracted} from "./utility";

import pkg from "elliptic";

const {ec: EC} = pkg;
// @ts-ignore
import base58 from "base58check";
import bip39 from 'bip39';

const ec = new EC('secp256k1');

export function createNewAddress(language: string) : {data: {pri: string, pub: string, words: string, publicKey: string}} {
    const key = ec.genKeyPair();
    const prefix = '83';
    let publicKey = key.getPublic('hex');
    let _publicKey = publicKey;
    const privateKey = key.getPrivate('hex');
    const resultStr = base58extracted(publicKey, prefix);
    const b58 = base58.encode(resultStr, prefix);
    bip39.setDefaultWordlist(language);
    const words = bip39.entropyToMnemonic(privateKey);
    return {data: {pri: privateKey, pub: 'PR' + b58, words: words, publicKey: _publicKey}};
}
