const {client} = require('../../config/client')

const endpoint = "/getScenario";

module.exports.getScenario = (address) => client.post(endpoint, {
    "address": address
});