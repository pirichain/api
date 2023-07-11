const {client} = require('../../config/client')

const endpoint = "/listScenarios";

module.exports.listScenarios = (skip, limit) => client.post(endpoint, {
    "skip": skip,
    "limit": limit
});