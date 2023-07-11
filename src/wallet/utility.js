const {ec: EC} = require("elliptic");
const ec = new EC('secp256k1');
const sha256 = require("sha256");
const base58check = require("base58check");
const RIPEMD160 = require("ripemd160");

module.exports.getPubKeyFromPrivate = function(pri) {
    try {
        const key = ec.keyFromPrivate(pri);
        return key.getPublic().encode('hex');
    } catch (e) {
        console.log('getPubKeyFromPrivateBase58');
        console.log(e);
    }
}

module.exports.convertToBase58 = function (pubAddress){
    const prefix='83';
    let publicKey = pubAddress;
    publicKey = sha256.x2(publicKey);
    publicKey = new RIPEMD160().update(publicKey).digest('hex');
    const secondHash = prefix+ publicKey;
    let hashLast = sha256.x2(secondHash);
    hashLast = sha256.x2(hashLast);
    const firstByte = hashLast.substr(0, 8);
    const resultStr = secondHash + firstByte;
    const b58 = base58check.encode(resultStr, prefix);
    return ({pub:pubAddress,base58:'PR'+b58});
}


