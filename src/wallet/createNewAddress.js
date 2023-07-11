const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const base58check = require('base58check')
const RIPEMD160 = require('ripemd160');
const sha256 = require('sha256');
const bip39 = require('bip39');

module.exports.createNewAddress = async function () {
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
    const words = bip39.entropyToMnemonic(privateKey)
    return {data: {pri: privateKey, pub: 'PR' + b58, words: words, publicKey: _publicKey}};
};
