const {client} = require('../../config/client')

const endpoint = "/getBlocksDesc";

module.exports.getBlocksDesc = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});