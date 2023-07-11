const {client} = require('../../config/client')

const endpoint = "/getDetailStats";

module.exports.getDetailStats = (assetID = null) => client.post(endpoint, {
    "assetID": assetID
});