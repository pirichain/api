"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../config/response");
class Stats extends response_1.FetchResponse {
    constructor(baseURL) {
        super(baseURL);
    }
    getCirculation() {
        return this.postResponse("/getCirculation");
    }
    getTotalBurnedPiri() {
        return this.postResponse("/getTotalBurnedPiri");
    }
    getDetailStats(assetID = null) {
        return this.postResponse("/getDetailStats", {
            "assetID": assetID
        });
    }
    getRichList(assetID, limit, skip = 0) {
        return this.postResponse("/getRichList", {
            "assetID": assetID,
            "limit": limit,
            "skip": skip
        });
    }
    getStats() {
        return this.postResponse("/getStats");
    }
    getAddressListByAsset(assetID, start, limit) {
        return this.postResponse("/getAddressListByAsset", {
            "assetID": assetID,
            "start": start,
            "limit": limit
        });
    }
}
exports.default = Stats;
//# sourceMappingURL=index.js.map