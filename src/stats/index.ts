import {FetchResponse} from "../config/response";


export default class Stats extends FetchResponse {
    constructor(baseURL: string) {
        super(baseURL);
    }

    getCirculation(): Promise<any> {
        return this.postResponse("/getCirculation");
    }

    getTotalBurnedPiri(): Promise<any> {
        return this.postResponse("/getTotalBurnedPiri");
    }

    getDetailStats(assetID: number | null = null): Promise<any> {
        return this.postResponse("/getDetailStats", {
            "assetID": assetID
        });
    }

    getRichList(assetID: number, limit: number, skip: number = 0): Promise<any> {
        return this.postResponse("/getRichList", {
            "assetID": assetID,
            "limit": limit,
            "skip": skip
        });
    }

    getStats(): Promise<any> {
        return this.postResponse("/getStats");
    }

    getAddressListByAsset(assetID: number, start: number, limit: number): Promise<any> {
        return this.postResponse("/getAddressListByAsset", {
            "assetID": assetID,
            "start": start,
            "limit": limit
        });
    }
}
