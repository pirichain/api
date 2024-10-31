"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushDataRawTransaction = pushDataRawTransaction;
const elliptic_1 = __importDefault(require("elliptic"));
const { ec: EC } = elliptic_1.default;
const sha256_1 = __importDefault(require("sha256"));
const crypto_1 = __importDefault(require("crypto"));
const ec = new EC('secp256k1');
function toHexString(byteArray) {
    return Array.from(byteArray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}
function getSharedKey(pri, pub) {
    const tmpKey = ec.keyFromPrivate(pri, "hex");
    const fKey = ec.keyFromPublic(pub, "hex");
    return tmpKey.derive(fKey.getPublic()).toString(16);
}
function encryptData(pri, pub, value) {
    let sharedKey = pri;
    try {
        if (pub)
            sharedKey = getSharedKey(pri, pub);
        // @ts-ignore
        const cipher = crypto_1.default.createCipher('aes-256-cbc', sharedKey);
        let crypted = cipher.update(value, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    catch (e) {
        return { error: 1, data: 'Error occurred while encrypting; ' + e };
    }
}
function sortObjectProperty(o) {
    const sorted = {};
    const keys = Object.keys(o).sort();
    for (const key of keys) {
        sorted[key] = o[key];
    }
    return sorted;
}
function preparePushDataWithSignature(customData, privateKey, receiptPubKey) {
    if (customData) {
        if (Array.isArray(customData)) {
            customData.forEach(f => {
                if (f.enc > 0) {
                    f.value = encryptData(privateKey, receiptPubKey, f.value);
                }
                if (f.enc > 1) {
                    f.key = encryptData(privateKey, receiptPubKey, f.key);
                }
            });
            return JSON.stringify(customData);
        }
        else
            return { error: 1, data: 'Custom data must be an array!' };
    }
    else
        return { error: 1, data: 'Custom data must be defined!' };
}
function pushDataRawTransaction(from, privateKey, to, customData, receiverPubKey, amount = 0) {
    let pubKey = '';
    const timeStamp = new Date().getTime();
    if (!Array.isArray(customData))
        return { error: 1, data: "Custom Data type should be array!" };
    const customData_ = customData.map(item => {
        if (to) {
            return sortObjectProperty(Object.assign(Object.assign({}, item), { from: from, timeStamp: timeStamp, to: to }));
        }
        return sortObjectProperty(Object.assign(Object.assign({}, item), { from: from, timeStamp: timeStamp }));
    });
    const message_ = preparePushDataWithSignature(customData_, privateKey, receiverPubKey);
    if (typeof message_ === 'object' && message_.error)
        return message_;
    const key = ec.keyFromPrivate(privateKey);
    pubKey = key.getPublic().encode('hex', false);
    const message = (0, sha256_1.default)(message_);
    const resultSign = key.sign(message).toDER();
    const signatureData = toHexString(new Uint8Array(resultSign));
    let params = {
        amount: amount,
        assetID: -1,
        timeStamp: timeStamp,
        signature: signatureData,
        pubKey: pubKey,
        address: from,
        customData: customData_,
        to: to
    };
    if (receiverPubKey)
        params.indPubKey = receiverPubKey;
    return sortObjectProperty(params);
}
//# sourceMappingURL=pushDataRawTransaction.js.map