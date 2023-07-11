const {client} = require('../../config/client');

const endpoint = "/getBlock";

module.exports.getBlock = (blockNumber) => client.post(endpoint, {
    "blockNumber": blockNumber
});