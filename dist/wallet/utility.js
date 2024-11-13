import { ec, sha256, base58, RIPEMD160 } from '../utility/modules';
export function getPubKeyFromPrivate(pri) {
    try {
        const key = ec.keyFromPrivate(pri);
        return key.getPublic().encode("hex", false);
    }
    catch (e) {
        console.log('getPubKeyFromPrivateBase58');
        console.log(e);
    }
}
export function convertToBase58(pubAddress) {
    const prefix = '83';
    const resultStr = base58extracted(pubAddress, prefix);
    const b58 = base58.encode(resultStr, prefix);
    return { pub: pubAddress, base58: 'PR' + b58 };
}
export function base58extracted(publicKey, prefix) {
    publicKey = sha256.x2(publicKey);
    publicKey = new RIPEMD160().update(publicKey).digest('hex');
    const secondHash = prefix + publicKey;
    let hashLast = sha256.x2(secondHash);
    hashLast = sha256.x2(hashLast);
    const firstByte = hashLast.substr(0, 8);
    return secondHash + firstByte;
}