const {client} = require('../../config/client')

const endpoint = "/listTransactionsByAssetID";

module.exports.listTransactionsByAssetID = (skip, limit, assetID, desc = false) => client.post(endpoint, {
    "skip": skip,
    "limit": limit,
    "assetID": assetID,
    "desc": desc.toString()
});