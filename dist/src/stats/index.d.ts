import { FetchResponse } from "../config/response";
export default class Stats extends FetchResponse {
    constructor(baseURL: string);
    getCirculation(): Promise<any>;
    getTotalBurnedPiri(): Promise<any>;
    getDetailStats(assetID?: number | null): Promise<any>;
    getRichList(assetID: number, limit: number, skip?: number): Promise<any>;
    getStats(): Promise<any>;
    getAddressListByAsset(assetID: number, start: number, limit: number): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map