const {client} = require('../../config/client')

const endpoint = "/listTransactionsByAddr";

module.exports.listTransactionsByAddr = (skip, limit, address) => client.post(endpoint, {
    "skip": skip,
    "limit": limit,
    "address": address
});