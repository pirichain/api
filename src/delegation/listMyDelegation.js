const {client} = require('../../config/client')

const endpoint = "/listMyDelegation";

module.exports.listMyDelegation = (delegationAddress, delegationPrivateKey) => client.post(endpoint, {
    "delegationAddress": delegationAddress,
    "delegationPrivateKey": delegationPrivateKey,
});