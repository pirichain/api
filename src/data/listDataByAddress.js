const {client} = require('../../config/client')

const endpoint = "/listDataByAddress";

module.exports.listDataByAddress = (address, limit, skip) => client.post(endpoint, {
    "address": address,
    "limit": limit,
    "skip": skip
});