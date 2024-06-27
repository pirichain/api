const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const sha = require('sha256');
const crypto = require('crypto');
const endpoint = "/pushDataRawTransaction";

function toHexString(byteArray) {
    return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
}

function getSharedKey(pri, pub) {
    const tmpKey = ec.keyFromPrivate(pri, "hex");
    let fKey = ec.keyFromPublic(pub, "hex")
    return tmpKey.derive(fKey.getPublic()).toString(16);
}

function encryptData(pri, pub, value) {
    let sharedKey = pri;
    try {
        if (pub)
            sharedKey = getSharedKey(pri, pub);
        // Ecryption in AES
        const cipher = crypto.createCipher('aes-256-cbc', sharedKey);
        let crypted = cipher.update(value, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    } catch (e) {
        return {error: 1, data: 'Error occured while encrypting ; ' + e.message};
    }
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


function preparePushDataWithSignature(customData, privateKey, receiptPubKey) {
    if (customData) {
        if (Array.isArray(customData)) {
            customData.forEach(f => {

                if (f.enc > 0) {
                    // Encrypt Value
                    f.value = encryptData(privateKey, receiptPubKey, f.value);
                }
                if (f.enc > 1) {
                    // Encrypt Key
                    f.key = encryptData(privateKey, receiptPubKey, f.key);
                }
            });
            return JSON.stringify(customData);
        } else return {error: 1, data: 'Custom data must be an array!'};
    } else return {error: 1, data: 'Custom data must be defined!'};

}

module.exports.pushDataRawTransaction = async (client, from, privateKey, to, customData, receiverPubKey, amount = 0) => {
    let pubKey = '';
    let timeStamp = new Date().getTime();
    if (!Array.isArray(customData))
        return {error: 1, data: "Custom Data type should be array!"}

    const customData_ = customData.map(item => {
        if (to)
            return sortObjectProperty({
                ...item,
                from: from,
                timeStamp: timeStamp,
                to: to
            })
        return sortObjectProperty({
            ...item,
            from: from,
            timeStamp: timeStamp,
        })
    })

    let message_ = preparePushDataWithSignature(
        customData_,
        privateKey,
        receiverPubKey
    );

    const key = ec.keyFromPrivate(privateKey);
    pubKey = key.getPublic().encode('hex');
    let message = sha(message_);

    const resultSign = key.sign(message).toDER();
    const signatureData = toHexString(resultSign);

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

    params = sortObjectProperty(params);

    return client.post(endpoint, params)
}
