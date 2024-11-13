import { FetchResponse } from "../config/response";
import { AxiosInstance } from "axios";
export declare class Stats extends FetchResponse {
    constructor(client: AxiosInstance);
    getCirculation(): Promise<any>;
    getTotalBurnedPiri(): Promise<any>;
    getDetailStats(assetID?: number | null): Promise<any>;
    getRichList(assetID: number, limit: number, skip?: number): Promise<any>;
    getStats(): Promise<any>;
    getAddressListByAsset(assetID: number, start: number, limit: number): Promise<any>;
}
