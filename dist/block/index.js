"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const response_1 = require("../config/response");
class Block extends response_1.FetchResponse {
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
exports.Block = Block;
//# sourceMappingURL=index.js.map