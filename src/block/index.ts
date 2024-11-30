import {FetchResponse} from "../config/response";


export default class Block extends FetchResponse {
    constructor(baseURL: string) {
        super(baseURL);
    }

    getBlock(blockNumber: number): Promise<any> {
        return this.postResponse("/getBlock", {
            "blockNumber": blockNumber
        })
    }

    getBlocks(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/getBlocks", {
            "skip": skip,
            "limit": limit
        })
    }

    getLastBlocksWithBlockHeight(limit: number = 10, blockHeight: number = 0): Promise<any> {
        return this.postResponse("/getLastBlocksWithBlockHeight", {
            "limit": limit,
            "blockHeight": blockHeight
        })
    }

    getBlocksWithTransactionCount(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/getBlocksWithTransactionCount", {
            "skip": skip,
            "limit": limit
        });
    }

    getBlocksDesc(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/getBlocksDesc", {
            "skip": skip,
            "limit": limit
        });
    }

    getOnlyBlocks(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/getOnlyBlocks", {
            "skip": skip,
            "limit": limit
        });
    }

    getLastBlocks(limit: number = 10): Promise<any> {
        return this.postResponse("/getLastBlocks", {
            "limit": limit
        });
    }
}

