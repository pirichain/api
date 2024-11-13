import { FetchResponse } from "../config/response";
export class Block extends FetchResponse {
    constructor(client) {
        super(client);
    }
    async getBlock(blockNumber) {
        return this.postResponse("/getBlock", {
            "blockNumber": blockNumber
        });
    }
    async getBlocks(skip = 0, limit = 10) {
        return this.postResponse("/getBlocks", {
            "skip": skip,
            "limit": limit
        });
    }
    async getLastBlocksWithBlockHeight(limit = 10, blockHeight = 0) {
        return this.postResponse("/getLastBlocksWithBlockHeight", {
            "limit": limit,
            "blockHeight": blockHeight
        });
    }
    async getBlocksWithTransactionCount(skip = 0, limit = 10) {
        return this.postResponse("/getBlocksWithTransactionCount", {
            "skip": skip,
            "limit": limit
        });
    }
    async getBlocksDesc(skip = 0, limit = 10) {
        return this.postResponse("/getBlocksDesc", {
            "skip": skip,
            "limit": limit
        });
    }
    async getOnlyBlocks(skip = 0, limit = 10) {
        return this.postResponse("/getOnlyBlocks", {
            "skip": skip,
            "limit": limit
        });
    }
    async getLastBlocks(limit = 10) {
        return this.postResponse("/getLastBlocks", {
            "limit": limit
        });
    }
}
//# sourceMappingURL=index.js.map