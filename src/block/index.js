class Block {
    client;

    constructor(client) {
        this.client = client
    }

    getBlock(blockNumber) {
        return this.client.post("/getBlock", {
            "blockNumber": blockNumber
        });
    }

    getBlocks(skip = 0, limit = 10) {
        return this.client.post("/getBlocks", {
            "skip": skip,
            "limit": limit
        });
    }

    getLastBlocksWithBlockHeight(limit = 10, blockHeight = 0) {
        return this.client.post("/getLastBlocksWithBlockHeight", {
            "limit": limit,
            "blockHeight": blockHeight
        });
    }

    getBlocksWithTransactionCount(skip = 0, limit = 10) {
        return this.client.post("/getBlocksWithTransactionCount", {
            "skip": skip,
            "limit": limit
        });
    }

    getBlocksDesc(skip = 0, limit = 10) {
        return this.client.post("/getBlocksDesc", {
            "skip": skip,
            "limit": limit
        });
    }

    getOnlyBlocks(skip = 0, limit = 10) {
        return this.client.post("/getOnlyBlocks", {
            "skip": skip,
            "limit": limit
        });
    }

    getLastBlocks(limit = 10) {
        return this.client.post("/getLastBlocks", {
            "limit": limit
        });
    }

}


module.exports = Block;
