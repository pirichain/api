const {client} = require('../../config/client')

const endpoint = "/createAddressForBuyPiri";

module.exports.createAddressForBuyPiri = (type) => client.post(endpoint, {
    "type": type,
});