const {client} = require('../../config/client')

const endpoint = "/listTransactions";

module.exports.listTransactions = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});