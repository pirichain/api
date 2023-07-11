const {client} = require('../../config/client')

const endpoint = "/freezeCoin";

module.exports.freezeCoin = (delegationAddress, delegationPrivateKey, duptyAddress, amount) => client.post(endpoint, {
    "delegationAddress": delegationAddress,
    "delegationPrivateKey": delegationPrivateKey,
    "duptyAddress": duptyAddress,
    "amount": amount
});