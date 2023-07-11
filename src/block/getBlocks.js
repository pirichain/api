const {client} = require('../../config/client')

const endpoint = "/getBlocks";

module.exports.getBlocks = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});