const {client} = require('../../config/client')

const endpoint = "/previewScenario";

module.exports.previewScenario = (scenarioText, address, privateKey, method, params) => client.post(endpoint, {
    "scenarioText": scenarioText,
    "address": address,
    "privateKey": privateKey,
    "method": method,
    "params": params
});