import { ApisauceInstance } from 'apisauce';
import { FetchResponse } from "../config/response";
interface IStats {
    getCirculation(): Promise<any>;
    getTotalBurnedPiri(): Promise<any>;
    getDetailStats(assetID?: number | null): Promise<any>;
    getRichList(assetID: number, limit: number, skip?: number): Promise<any>;
    getStats(): Promise<any>;
    getAddressListByAsset(assetID: number, start: number, limit: number): Promise<any>;
}
declare class Stats extends FetchResponse implements IStats {
    constructor(client: ApisauceInstance);
    getCirculation(): Promise<any>;
    getTotalBurnedPiri(): Promise<any>;
    getDetailStats(assetID?: number | null): Promise<any>;
    getRichList(assetID: number, limit: number, skip?: number): Promise<any>;
    getStats(): Promise<any>;
    getAddressListByAsset(assetID: number, start: number, limit: number): Promise<any>;
}
export default Stats;
export { IStats };
