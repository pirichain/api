const {client} = require('../../config/client')

const endpoint = "/getAddressListByAsset";

module.exports.getAddressListByAsset = (assetID, start, limit) => client.post(endpoint, {
    "assetID": assetID,
    "start": start,
    "limit": limit
});