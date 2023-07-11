const {client} = require('../../config/client')

const endpoint = "/listDeputies";

module.exports.listDeputies = () => client.post(endpoint);