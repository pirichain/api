const {client} = require('../../config/client')

const endpoint = "/sendToken";

module.exports.sendToken = (address, privateKey, to, amount, assetID) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "to": to,
    "amount": amount,
    "assetID": assetID
});