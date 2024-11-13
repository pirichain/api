import {FetchResponse} from "../config/response";
import {AxiosInstance} from '../utility/modules';


export default class Block extends FetchResponse {
    constructor(client: AxiosInstance) {
        super(client);
    }

    async getBlock(blockNumber: number): Promise<any> {
        return this.postResponse("/getBlock", {
            "blockNumber": blockNumber
        })
    }

    async getBlocks(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/getBlocks", {
            "skip": skip,
            "limit": limit
        })
    }

    async getLastBlocksWithBlockHeight(limit: number = 10, blockHeight: number = 0): Promise<any> {
        return this.postResponse("/getLastBlocksWithBlockHeight", {
            "limit": limit,
            "blockHeight": blockHeight
        })
    }

    async getBlocksWithTransactionCount(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/getBlocksWithTransactionCount", {
            "skip": skip,
            "limit": limit
        });
    }

    async getBlocksDesc(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/getBlocksDesc", {
            "skip": skip,
            "limit": limit
        });
    }

    async getOnlyBlocks(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/getOnlyBlocks", {
            "skip": skip,
            "limit": limit
        });
    }

    async getLastBlocks(limit: number = 10): Promise<any> {
        return this.postResponse("/getLastBlocks", {
            "limit": limit
        });
    }
}

