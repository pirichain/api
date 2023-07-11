const {client} = require('../../config/client')

const endpoint = '/decrypt';

module.exports.decrypt = (customID, privateKey, receiptPub) => client.post(endpoint, {
    'customID': customID,
    'privateKey': privateKey,
    "receiptPub": receiptPub
});
