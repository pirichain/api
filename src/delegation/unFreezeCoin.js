const {client} = require('../../config/client')

const endpoint = "/unFreezeCoin";

module.exports.unFreezeCoin = (delegationAddress, delegationPrivateKey, nodeAddress, txHash) => client.post(endpoint, {
    "delegationAddress": delegationAddress,
    "delegationPrivateKey": delegationPrivateKey,
    "nodeAddress": nodeAddress,
    "txHash": txHash
});