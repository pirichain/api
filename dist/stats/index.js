import { FetchResponse } from "../config/response";
export default class Stats extends FetchResponse {
    constructor(client) {
        super(client);
    }
    async getCirculation() {
        return this.postResponse("/getCirculation");
    }
    async getTotalBurnedPiri() {
        return this.postResponse("/getTotalBurnedPiri");
    }
    async getDetailStats(assetID = null) {
        return this.postResponse("/getDetailStats", {
            "assetID": assetID
        });
    }
    async getRichList(assetID, limit, skip = 0) {
        return this.postResponse("/getRichList", {
            "assetID": assetID,
            "limit": limit,
            "skip": skip
        });
    }
    async getStats() {
        return this.postResponse("/getStats");
    }
    async getAddressListByAsset(assetID, start, limit) {
        return this.postResponse("/getAddressListByAsset", {
            "assetID": assetID,
            "start": start,
            "limit": limit
        });
    }
}
