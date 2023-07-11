const {client} = require('../../config/client')

const endpoint = '/isValidAddress';

module.exports.isValidAddress = (address) => client.post(endpoint, {
    'address': address
});