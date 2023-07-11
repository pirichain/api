const {client} = require('../../config/client')

const endpoint = "/getBalanceForBuyPiri";

module.exports.getBalanceForBuyPiri = (type, address, piriAddress) => client.post(endpoint, {
    "type": type,
    "address": address,
    "piriAddress": piriAddress
});