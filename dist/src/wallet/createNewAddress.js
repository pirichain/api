"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewAddress = createNewAddress;
const utility_1 = require("./utility");
// @ts-ignore
const base58check_1 = __importDefault(require("base58check"));
const bip39 = __importStar(require("bip39"));
const elliptic_1 = __importDefault(require("elliptic"));
const ec = new elliptic_1.default.ec("secp256k1");
function createNewAddress(language, chainPrefix) {
    const key = ec.genKeyPair();
    const prefix = '83';
    let publicKey = key.getPublic('hex');
    let _publicKey = publicKey;
    const privateKey = key.getPrivate('hex');
    const resultStr = (0, utility_1.base58extracted)(publicKey, prefix);
    const b58 = base58check_1.default.encode(resultStr, prefix);
    bip39.setDefaultWordlist(language);
    const words = bip39.entropyToMnemonic(privateKey);
    return { data: { pri: privateKey, pub: (chainPrefix !== null && chainPrefix !== void 0 ? chainPrefix : 'PR') + b58, words: words, publicKey: _publicKey } };
}
//# sourceMappingURL=createNewAddress.js.map