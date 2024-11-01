import { ApisauceInstance } from 'apisauce';
import { FetchResponse } from "../config/response";
interface IBlock {
    getBlock(blockNumber: number): Promise<any>;
    getBlocks(skip?: number, limit?: number): Promise<any>;
    getLastBlocksWithBlockHeight(limit?: number, blockHeight?: number): Promise<any>;
    getBlocksWithTransactionCount(skip?: number, limit?: number): Promise<any>;
    getBlocksDesc(skip?: number, limit?: number): Promise<any>;
    getOnlyBlocks(skip?: number, limit?: number): Promise<any>;
    getLastBlocks(limit?: number): Promise<any>;
}
declare class Block extends FetchResponse implements IBlock {
    constructor(client: ApisauceInstance);
    getBlock(blockNumber: number): Promise<any>;
    getBlocks(skip?: number, limit?: number): Promise<any>;
    getLastBlocksWithBlockHeight(limit?: number, blockHeight?: number): Promise<any>;
    getBlocksWithTransactionCount(skip?: number, limit?: number): Promise<any>;
    getBlocksDesc(skip?: number, limit?: number): Promise<any>;
    getOnlyBlocks(skip?: number, limit?: number): Promise<any>;
    getLastBlocks(limit?: number): Promise<any>;
}
export default Block;
export { IBlock };
