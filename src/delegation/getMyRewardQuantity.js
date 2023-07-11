const {client} = require('../../config/client')

const endpoint = "/getMyRewardQuantity";

module.exports.getMyRewardQuantity = (base58, privateKey) => client.post(endpoint, {
    "base58": base58,
    "privateKey": privateKey
});