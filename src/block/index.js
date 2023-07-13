class Block {
    constructor(client) {
        this.client = client
    }
    getBlock(blockNumber){
        return this.client.post("/getBlock", {
            "blockNumber": blockNumber
        });
    }

    getBlocks(skip, limit){
        return this.client.post("/getBlocks", {
            "skip": skip,
            "limit": limit
        });
    }

    getBlocksDesc(skip, limit){
        return this.client.post("/getBlocksDesc", {
            "skip": skip,
            "limit": limit
        });
    }

    getOnlyBlocks(skip, limit){
        return this.client.post("/getOnlyBlocks", {
            "skip": skip,
            "limit": limit
        });
    }

    getLastBlocks(limit){
        return this.client.post("/getLastBlocks", {
            "limit": limit
        });
    }

}


module.exports = Block;
