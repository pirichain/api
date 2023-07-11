const {client} = require('../../config/client')

const endpoint = "/getStats";

module.exports.getStats = () => client.post(endpoint);