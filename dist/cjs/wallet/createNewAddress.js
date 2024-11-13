"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewAddress = createNewAddress;
const utility_1 = require("./utility");
const elliptic_1 = __importDefault(require("elliptic"));
const { ec: EC } = elliptic_1.default;
const base58check_1 = __importDefault(require("@pirichain/base58check"));
const bip39_1 = __importDefault(require("bip39"));
const ec = new EC('secp256k1');
function createNewAddress(language) {
    const key = ec.genKeyPair();
    const prefix = '83';
    let publicKey = key.getPublic('hex');
    let _publicKey = publicKey;
    const privateKey = key.getPrivate('hex');
    const resultStr = (0, utility_1.base58extracted)(publicKey, prefix);
    const b58 = base58check_1.default.encode(resultStr, prefix);
    bip39_1.default.setDefaultWordlist(language);
    const words = bip39_1.default.entropyToMnemonic(privateKey);
    return { data: { pri: privateKey, pub: 'PR' + b58, words: words, publicKey: _publicKey } };
}
//# sourceMappingURL=createNewAddress.js.map