"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../config/response");
class Block extends response_1.FetchResponse {
    constructor(baseURL) {
        super(baseURL);
    }
    getBlock(blockNumber) {
        return this.postResponse("/getBlock", {
            "blockNumber": blockNumber
        });
    }
    getBlocks(skip = 0, limit = 10) {
        return this.postResponse("/getBlocks", {
            "skip": skip,
            "limit": limit
        });
    }
    getLastBlocksWithBlockHeight(limit = 10, blockHeight = 0) {
        return this.postResponse("/getLastBlocksWithBlockHeight", {
            "limit": limit,
            "blockHeight": blockHeight
        });
    }
    getBlocksWithTransactionCount(skip = 0, limit = 10) {
        return this.postResponse("/getBlocksWithTransactionCount", {
            "skip": skip,
            "limit": limit
        });
    }
    getBlocksDesc(skip = 0, limit = 10) {
        return this.postResponse("/getBlocksDesc", {
            "skip": skip,
            "limit": limit
        });
    }
    getOnlyBlocks(skip = 0, limit = 10) {
        return this.postResponse("/getOnlyBlocks", {
            "skip": skip,
            "limit": limit
        });
    }
    getLastBlocks(limit = 10) {
        return this.postResponse("/getLastBlocks", {
            "limit": limit
        });
    }
}
exports.default = Block;
//# sourceMappingURL=index.js.map