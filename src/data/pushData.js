const {client} = require('../../config/client')

const endpoint = "/pushData";

module.exports.pushData = (address, privateKey, to, indPubKey, key, value, enc) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "to": to,
    "indPubKey": indPubKey,
    "customData[]": JSON.stringify({ "key": key, "value": value, "enc": enc })
});
