"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRawTransaction = sendRawTransaction;
const elliptic_1 = __importDefault(require("elliptic"));
const sha256_1 = __importDefault(require("sha256"));
const { ec: EC } = elliptic_1.default;
const ec = new EC('secp256k1');
function toHexString(byteArray) {
    return Array.from(byteArray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}
function sortObjectProperty(o) {
    const sorted = {};
    const keys = Object.keys(o).sort();
    for (const key of keys) {
        sorted[key] = o[key];
    }
    return sorted;
}
function prepareSendTokenWithSignature(from, toAddress, amount, assetID, globTime, fee) {
    let data = {
        from: from,
        to: toAddress,
        amount: amount,
        assetID: assetID,
        timeStamp: globTime,
        fee: fee,
        metaData: {}
    };
    data = sortObjectProperty(data);
    return JSON.stringify(data);
}
function sendRawTransaction(address_1, privateKey_1, to_1, amount_1, estimatedFee_1) {
    return __awaiter(this, arguments, void 0, function* (address, privateKey, to, amount, estimatedFee, assetID = -1) {
        const timeStamp = Date.now();
        const message_ = prepareSendTokenWithSignature(address, to, amount, assetID, timeStamp, estimatedFee);
        const key = ec.keyFromPrivate(privateKey);
        const publicKey = key.getPublic().encode('hex', false);
        const message = (0, sha256_1.default)(message_);
        const resultSign = key.sign(message).toDER();
        const signatureData = toHexString(new Uint8Array(resultSign));
        return {
            publicKey,
            address,
            to,
            amount,
            assetID,
            signaturedData: signatureData,
            timeStamp,
            fee: estimatedFee
        };
    });
}
//# sourceMappingURL=sendRawTransaction.js.map