const {client} = require('../../config/client')

const endpoint = "/editScenario";

module.exports.editScenario = (address, privateKey, scenarioText, scenarioAddress) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "scenarioText": scenarioText,
    "scenarioAddress": scenarioAddress
});