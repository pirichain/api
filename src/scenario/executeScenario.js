const {client} = require('../../config/client')

const endpoint = "/executeScenario";

module.exports.executeScenario = (scenarioAddress, address, privateKey, method, params) => client.post(endpoint, {
    "scenarioAddress": scenarioAddress,
    "address": address,
    "privateKey": privateKey,
    "method": method,
    "params": params
});