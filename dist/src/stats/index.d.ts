import { FetchResponse } from "../config/response";
import { AxiosInstance } from "axios";
interface IStats {
    getCirculation(): Promise<any>;
    getTotalBurnedPiri(): Promise<any>;
    getDetailStats(assetID?: number | null): Promise<any>;
    getRichList(assetID: number, limit: number, skip?: number): Promise<any>;
    getStats(): Promise<any>;
    getAddressListByAsset(assetID: number, start: number, limit: number): Promise<any>;
}
declare class Stats extends FetchResponse implements IStats {
    constructor(client: AxiosInstance);
    getCirculation(): Promise<any>;
    getTotalBurnedPiri(): Promise<any>;
    getDetailStats(assetID?: number | null): Promise<any>;
    getRichList(assetID: number, limit: number, skip?: number): Promise<any>;
    getStats(): Promise<any>;
    getAddressListByAsset(assetID: number, start: number, limit: number): Promise<any>;
}
export default Stats;
export { IStats };
