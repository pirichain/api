const EC = require('elliptic').ec;
const sha = require('sha256');

const ec = new EC('secp256k1');

const endpoint = "/sendRawTransaction";

function toHexString(byteArray) {
    return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
}

function sortObjectProperty(o) {
    let sorted = {},
        key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}

function prepareSendTokenWithSignature(client, from, toAddress, amount, assetID, globTime, fee = 0.1) {
    let data = {
        from: from,
        to: toAddress,
        amount: amount,
        assetID: assetID,
        timeStamp: globTime,
        fee: parseFloat(fee),
        metaData: {}
    };

    data = sortObjectProperty(data);
    return JSON.stringify(data);
}

module.exports.sendRawTransaction = async (client, address, privateKey, to, amount, assetID = -1, estimatedFee = 0.1) => {
    let timeStamp = Date.now();
    let message_ = prepareSendTokenWithSignature(
        client,
        address,
        to,
        amount,
        assetID,
        timeStamp,
        estimatedFee
    );
    const key = ec.keyFromPrivate(privateKey);
    const publicKey = key.getPublic().encode('hex');
    let message = sha(message_)

    const resultSign = key.sign(message).toDER();
    const signatureData = toHexString(resultSign);

    let params = {
        "publicKey": publicKey,
        "address": address,
        "to": to,
        "amount": amount,
        "assetID": assetID,
        "signaturedData": signatureData,
        "timeStamp": timeStamp,
        "fee": estimatedFee
    }

    return client.post(endpoint, params)
};
