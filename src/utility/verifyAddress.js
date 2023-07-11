const {client} = require('../../config/client')

const endpoint = '/verifyAddress';

module.exports.verifyAddress = (address) => client.post(endpoint, {
    'address': address
});
