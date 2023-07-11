const {client} = require('../../config/client')

const endpoint = "/getLastBlocks";

module.exports.getLastBlocks = (limit) => client.post(endpoint, {
    "limit": limit
});
