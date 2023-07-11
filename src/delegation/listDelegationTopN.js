const {client} = require('../../config/client')

const endpoint = "/listDelegationTopN";

module.exports.listDelegationTopN = () => client.post(endpoint);