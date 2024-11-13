import { ec, sha256 } from '../utility/modules';
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
export async function sendRawTransaction(address, privateKey, to, amount, estimatedFee, assetID = -1) {
    const timeStamp = Date.now();
    const message_ = prepareSendTokenWithSignature(address, to, amount, assetID, timeStamp, estimatedFee);
    const key = ec.keyFromPrivate(privateKey);
    const publicKey = key.getPublic().encode('hex', false);
    const message = sha256(message_);
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
}
