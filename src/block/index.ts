import {ApisauceInstance} from 'apisauce';
import {FetchResponse} from "../config/response";

interface IBlock {
    getBlock(blockNumber: number): Promise<any>;
    getBlocks(skip?: number, limit?: number): Promise<any>;
    getLastBlocksWithBlockHeight(limit?: number, blockHeight?: number): Promise<any>;
    getBlocksWithTransactionCount(skip?: number, limit?: number): Promise<any>;
    getBlocksDesc(skip?: number, limit?: number): Promise<any>;
    getOnlyBlocks(skip?: number, limit?: number): Promise<any>;
    getLastBlocks(limit?: number): Promise<any>;
}

class Block extends FetchResponse implements IBlock {
    constructor(client: ApisauceInstance) {
        super(client);
    }

    async getBlock(blockNumber: number): Promise<any> {
        return await this.postResponse("/getBlock", {
            "blockNumber": blockNumber
        })
    }

    async getBlocks(skip: number = 0, limit: number = 10): Promise<any> {
        return await this.postResponse("/getBlocks", {
            "skip": skip,
            "limit": limit
        })
    }

    async getLastBlocksWithBlockHeight(limit: number = 10, blockHeight: number = 0): Promise<any> {
        return await this.postResponse("/getLastBlocksWithBlockHeight", {
            "limit": limit,
            "blockHeight": blockHeight
        })
    }

    async getBlocksWithTransactionCount(skip: number = 0, limit: number = 10): Promise<any> {
        return await this.postResponse("/getBlocksWithTransactionCount", {
            "skip": skip,
            "limit": limit
        });
    }

    async getBlocksDesc(skip: number = 0, limit: number = 10): Promise<any> {
        return await this.postResponse("/getBlocksDesc", {
            "skip": skip,
            "limit": limit
        });
    }

    async getOnlyBlocks(skip: number = 0, limit: number = 10): Promise<any> {
        return await this.postResponse("/getOnlyBlocks", {
            "skip": skip,
            "limit": limit
        });
    }

    async getLastBlocks(limit: number = 10): Promise<any> {
        return await this.postResponse("/getLastBlocks", {
            "limit": limit
        });
    }
}

export default Block;
export {IBlock}
