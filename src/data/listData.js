const {client} = require('../../config/client')

const endpoint = "/listData";

module.exports.listData = (limit, skip) => client.post(endpoint, {
    "limit": limit,
    "skip": skip
});