const {client} = require('../../config/client')

const endpoint = "/checkDeputy";

module.exports.checkDeputy = (address) => client.post(endpoint, {
    "address": address
});