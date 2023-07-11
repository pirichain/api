const {client} = require('../../config/client')

const endpoint = "/createScenario";

module.exports.createScenario = (address, privateKey, scenarioText, name, description, tags) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "scenarioText": scenarioText,
    "name": name,
    "description": description,
    "tags": tags

});