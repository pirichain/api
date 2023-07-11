const {client} = require('../../config/client')

const endpoint = "/getRichList";

module.exports.getRichList = (assetID, limit, skip) => client.post(endpoint, {
    "assetID": assetID,
    "limit": limit,
    "skip": skip
});