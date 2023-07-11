const {client} = require('../../config/client')

const endpoint = "/getDetailsOfAddress";

module.exports.getDetailsOfAddress = (address) => client.post(endpoint, {
    "address": address
});