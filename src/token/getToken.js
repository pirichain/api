const {client} = require('../../config/client')

const endpoint = "/getToken";

module.exports.getToken = (assetID) => client.post(endpoint, {
    "assetID": assetID
});