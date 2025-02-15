// @ts-ignore
import base58 from "base58check";
import sha256 from "sha256";
import RIPEMD160 from "ripemd160";

import pkg from "elliptic";
const ec = new pkg.ec("secp256k1");

export function getPubKeyFromPrivate(pri: string): string | undefined {
    try {
        const key = ec.keyFromPrivate(pri);
        return key.getPublic().encode("hex", false);
    } catch (e) {
        console.log('getPubKeyFromPrivateBase58');
        console.log(e);
    }
}

export function convertToBase58(pubAddress: string, chainPrefix?: string): { pub: string, base58: string} {
    const prefix = '83';
    const resultStr = base58extracted(pubAddress, prefix);
    const b58 = base58.encode(resultStr, prefix);
    return { pub: pubAddress, base58: (chainPrefix ?? 'PR') + b58 };
}

export function base58extracted(publicKey: string, prefix: string): string {
    publicKey = sha256.x2(publicKey);
    publicKey = new RIPEMD160().update(publicKey).digest('hex');
    const secondHash = prefix + publicKey;
    let hashLast = sha256.x2(secondHash);
    hashLast = sha256.x2(hashLast);
    const firstByte = hashLast.substr(0, 8);
    return secondHash + firstByte;
}
