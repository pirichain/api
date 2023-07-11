const {client} = require('../../config/client')

const endpoint = '/getBalance';

module.exports.getBalance = (address, assetID) => client.post(endpoint, {
    'address': address,
    'assetID': assetID
});