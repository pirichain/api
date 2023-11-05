import { ApisauceInstance } from "apisauce";

class Block {
    private client: ApisauceInstance;

    constructor(client: ApisauceInstance) {
        this.client = client;
    }

    getBlock(blockNumber: number) {
        return this.client.post("/getBlock", {
            blockNumber,
        });
    }

    getBlocks(skip: number = 0, limit: number = 10) {
        return this.client.post("/getBlocks", {
            skip,
            limit,
        });
    }

    getLastBlocksWithBlockHeight(limit: number = 10, blockHeight: number = 0) {
        return this.client.post("/getLastBlocksWithBlockHeight", {
            limit,
            blockHeight,
        });
    }

    getBlocksWithTransactionCount(skip: number = 0, limit: number = 10) {
        return this.client.post("/getBlocksWithTransactionCount", {
            skip,
            limit,
        });
    }

    getBlocksDesc(skip: number = 0, limit: number = 10) {
        return this.client.post("/getBlocksDesc", {
            skip,
            limit,
        });
    }

    getOnlyBlocks(skip: number = 0, limit: number = 10) {
        return this.client.post("/getOnlyBlocks", {
            skip,
            limit,
        });
    }

    getLastBlocks(limit: number = 10) {
        return this.client.post("/getLastBlocks", {
            limit,
        });
    }
}

export default Block;
