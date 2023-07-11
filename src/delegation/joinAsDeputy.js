const {client} = require('../../config/client')

const endpoint = "/joinAsDeputy";

module.exports.joinAsDeputy = (address, privateKey, alias, website) => client.post(endpoint, {
    "address": address,
    "privateKey": privateKey,
    "alias": alias,
    "website": website
});
