const {client} = require('../../config/client')

const endpoint = "/listMyScenarios";

module.exports.listMyScenarios = (ownerAddress) => client.post(endpoint, {
    "ownerAddress": ownerAddress
});