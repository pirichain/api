const {client} = require('../../config/client')

const endpoint = '/search';

module.exports.search = (value) => client.post(endpoint, {
    'value': value
});