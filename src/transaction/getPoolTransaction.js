const {client} = require('../../config/client')

const endpoint = "/getPoolTransaction";

module.exports.getPoolTransaction = (tx) => client.post(endpoint, {
    "tx": tx
});