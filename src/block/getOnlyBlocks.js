const {client} = require('../../config/client')

const endpoint = "/getOnlyBlocks";

module.exports.getOnlyBlocks = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});