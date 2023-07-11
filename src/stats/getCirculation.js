const {client} = require('../../config/client')

const endpoint = "/getCirculation";

module.exports.getCirculation = () => client.post(endpoint);