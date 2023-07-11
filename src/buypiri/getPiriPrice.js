const {client} = require('../../config/client')

const endpoint = "/getPiriPrice";

module.exports.getPiriPrice = (type) => client.post(endpoint, {
    "type": type
});