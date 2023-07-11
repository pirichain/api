const {client} = require('../../config/client')

const endpoint = "/getBalanceList";

module.exports.getBalanceList = address => client.post(endpoint, {
    "address": address
});