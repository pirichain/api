const {client} = require('../../config/client')

const endpoint = "/givemePiri";

module.exports.givemePiri = (address) => client.post(endpoint, {
    "address": address
});