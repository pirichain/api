import { ec as EC } from 'elliptic';
// @ts-ignore
import sha256 from 'sha256';
// @ts-ignore
import base58check from 'base58check';
import RIPEMD160 from 'ripemd160';

const ec = new EC('secp256k1');

export function getPubKeyFromPrivate(pri: string) {
    try {
        const key = ec.keyFromPrivate(pri);
        return key.getPublic('hex');
    } catch (e) {
        console.log('getPubKeyFromPrivateBase58');
        console.log(e);
    }
}

export function convertToBase58(pubAddress: string) {
    const prefix = '83';
    let publicKey = pubAddress;
    publicKey = sha256.x2(publicKey);
    publicKey = new RIPEMD160().update(publicKey).digest('hex');
    const secondHash = prefix + publicKey;
    let hashLast = sha256.x2(secondHash);
    hashLast = sha256.x2(hashLast);
    const firstByte = hashLast.substr(0, 8);
    const resultStr = secondHash + firstByte;
    const b58 = base58check.encode(resultStr, prefix);
    return { pub: pubAddress, base58: 'PR' + b58 };
}
