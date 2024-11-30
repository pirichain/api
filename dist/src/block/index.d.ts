import { FetchResponse } from "../config/response";
export default class Block extends FetchResponse {
    constructor(baseURL: string);
    getBlock(blockNumber: number): Promise<any>;
    getBlocks(skip?: number, limit?: number): Promise<any>;
    getLastBlocksWithBlockHeight(limit?: number, blockHeight?: number): Promise<any>;
    getBlocksWithTransactionCount(skip?: number, limit?: number): Promise<any>;
    getBlocksDesc(skip?: number, limit?: number): Promise<any>;
    getOnlyBlocks(skip?: number, limit?: number): Promise<any>;
    getLastBlocks(limit?: number): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map