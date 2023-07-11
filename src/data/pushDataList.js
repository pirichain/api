const {client} = require('../../config/client')

const endpoint = "/pushData";

module.exports.pushDataList = (address, privateKey, to, customData, indPubKey) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "to": to,
    "customData": customData,
    "indPubKey": indPubKey
});
