const {client} = require('../../config/client');
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

function prepareSendTokenWithSignature(from, toAddress, amount, assetID, globTime) {
    const mainnetData = {
        from: from,
        to: toAddress,
        amount: amount,
        assetID: assetID,
        fee: 0.1,
        timeStamp: globTime
    };
    const testnetData = {
        ...mainnetData,
        metaData: {}
    }

    let data = (typeof window !== "undefined" && typeof window.document !== "undefined") ?
        (localStorage.getItem('isMainnet') === 'true' || localStorage.getItem('isMainnet') === null ? mainnetData : testnetData) :
        (piriChainNetworkIsMainNet ? mainnetData : testnetData)

    data = sortObjectProperty(data);
    return JSON.stringify(data);
}


module.exports.sendRawTransaction = (address, privateKey, to, amount, assetID = -1) => {
    let timeStamp = new Date().getTime();
    let message_ = prepareSendTokenWithSignature(
        address,
        to,
        amount,
        assetID,
        timeStamp,
    );
    const key = ec.keyFromPrivate(privateKey);
    const publicKey = key.getPublic().encode('hex');
    let message = sha(message_)

    const resultSign = key.sign(message).toDER();
    const signatureData = toHexString(resultSign);

    return client.post(endpoint, {
        "publicKey": publicKey,
        "address": address,
        "to": to,
        "amount": amount,
        "assetID": assetID,
        "signaturedData": signatureData,
        "timeStamp": timeStamp
    })
};
