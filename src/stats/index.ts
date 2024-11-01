import {ApisauceInstance} from 'apisauce';
import {FetchResponse} from "../../config/response";

class Stats extends FetchResponse {
    constructor(client: ApisauceInstance) {
        super(client);
    }

    async getCirculation(): Promise<any> {
        return await this.postResponse("/getCirculation");
    }

    async getTotalBurnedPiri(): Promise<any> {
        return await this.postResponse("/getTotalBurnedPiri");
    }

    async getDetailStats(assetID: number | null = null): Promise<any> {
        return await this.postResponse("/getDetailStats", {
            "assetID": assetID
        });
    }

    async getRichList(assetID: number, limit: number, skip: number = 0): Promise<any> {
        return await this.postResponse("/getRichList", {
            "assetID": assetID,
            "limit": limit,
            "skip": skip
        });
    }

    async getStats(): Promise<any> {
        return await this.postResponse("/getStats");
    }

    async getAddressListByAsset(assetID: number, start: number, limit: number): Promise<any> {
        return await this.postResponse("/getAddressListByAsset", {
            "assetID": assetID,
            "start": start,
            "limit": limit
        });
    }
}

export default Stats;