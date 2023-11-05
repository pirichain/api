import { ec as EllipticEC } from 'elliptic';
// @ts-ignore
import base58check from 'base58check';
import RIPEMD160  from 'ripemd160';
// @ts-ignore
import sha256 from 'sha256';
import bip39 from 'bip39';

const ec = new EllipticEC('secp256k1');

export async function createNewAddress() {
    const key = ec.genKeyPair();
    const prefix = '83';
    let publicKey = key.getPublic('hex');
    let _publicKey = publicKey;
    const privateKey = key.getPrivate('hex');
    publicKey = sha256.x2(publicKey);
    publicKey = new RIPEMD160().update(publicKey).digest('hex');
    const secondHash = prefix + publicKey;
    let hashLast = sha256.x2(secondHash);
    hashLast = sha256.x2(hashLast);
    const firstByte = hashLast.substr(0, 8);
    const resultStr = secondHash + firstByte;
    const b58 = base58check.encode(resultStr, prefix);
    bip39.setDefaultWordlist('english');
    const words = bip39.entropyToMnemonic(privateKey);
    return { data: { pri: privateKey, pub: 'PR' + b58, words, publicKey: _publicKey } };
}
