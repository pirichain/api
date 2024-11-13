"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
const response_1 = require("../config/response");
class Stats extends response_1.FetchResponse {
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
exports.Stats = Stats;
//# sourceMappingURL=index.js.map