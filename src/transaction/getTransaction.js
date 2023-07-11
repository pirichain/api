const {client} = require('../../config/client')

const endpoint = "/getTransaction";

module.exports.getTransaction = (tx) => client.post(endpoint, {
    "tx": tx
});