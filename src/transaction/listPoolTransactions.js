const {client} = require('../../config/client')

const endpoint = "/listPoolTransactions";

module.exports.listPoolTransactions = () => client.post(endpoint);