const {client} = require('../../config/client')

const endpoint = "/listTokens";

module.exports.listTokens = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});