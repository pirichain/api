import {FetchResponse} from "../config/response";
import {AxiosInstance} from '../utility/modules';


export default class Stats extends FetchResponse {
    constructor(client: AxiosInstance) {
        super(client);
    }

    async getCirculation(): Promise<any> {
        return this.postResponse("/getCirculation");
    }

    async getTotalBurnedPiri(): Promise<any> {
        return this.postResponse("/getTotalBurnedPiri");
    }

    async getDetailStats(assetID: number | null = null): Promise<any> {
        return this.postResponse("/getDetailStats", {
            "assetID": assetID
        });
    }

    async getRichList(assetID: number, limit: number, skip: number = 0): Promise<any> {
        return this.postResponse("/getRichList", {
            "assetID": assetID,
            "limit": limit,
            "skip": skip
        });
    }

    async getStats(): Promise<any> {
        return this.postResponse("/getStats");
    }

    async getAddressListByAsset(assetID: number, start: number, limit: number): Promise<any> {
        return this.postResponse("/getAddressListByAsset", {
            "assetID": assetID,
            "start": start,
            "limit": limit
        });
    }
}
