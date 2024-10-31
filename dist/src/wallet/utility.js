"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPubKeyFromPrivate = getPubKeyFromPrivate;
exports.convertToBase58 = convertToBase58;
exports.base58extracted = base58extracted;
const elliptic_1 = __importDefault(require("elliptic"));
const { ec: EC } = elliptic_1.default;
const sha256_1 = __importDefault(require("sha256"));
const base_58_1 = __importDefault(require("base-58"));
const ripemd160_1 = __importDefault(require("ripemd160"));
const ec = new EC('secp256k1');
function getPubKeyFromPrivate(pri) {
    try {
        const key = ec.keyFromPrivate(pri);
        return key.getPublic().encode("hex", false);
    }
    catch (e) {
        console.log('getPubKeyFromPrivateBase58');
        console.log(e);
    }
}
function convertToBase58(pubAddress) {
    const prefix = '83';
    const resultStr = base58extracted(pubAddress, prefix);
    const b58 = base_58_1.default.encode(Buffer.from(resultStr, 'hex'));
    return { pub: pubAddress, base58: 'PR' + b58 };
}
function base58extracted(publicKey, prefix) {
    publicKey = sha256_1.default.x2(publicKey);
    publicKey = new ripemd160_1.default().update(publicKey).digest('hex');
    const secondHash = prefix + publicKey;
    let hashLast = sha256_1.default.x2(secondHash);
    hashLast = sha256_1.default.x2(hashLast);
    const firstByte = hashLast.substr(0, 8);
    return secondHash + firstByte;
}
//# sourceMappingURL=utility.js.map