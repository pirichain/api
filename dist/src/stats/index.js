"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../config/response");
class Stats extends response_1.FetchResponse {
    constructor(client) {
        super(client);
    }
    getCirculation() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getCirculation");
        });
    }
    getTotalBurnedPiri() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getTotalBurnedPiri");
        });
    }
    getDetailStats() {
        return __awaiter(this, arguments, void 0, function* (assetID = null) {
            return yield this.postResponse("/getDetailStats", {
                "assetID": assetID
            });
        });
    }
    getRichList(assetID_1, limit_1) {
        return __awaiter(this, arguments, void 0, function* (assetID, limit, skip = 0) {
            return yield this.postResponse("/getRichList", {
                "assetID": assetID,
                "limit": limit,
                "skip": skip
            });
        });
    }
    getStats() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getStats");
        });
    }
    getAddressListByAsset(assetID, start, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getAddressListByAsset", {
                "assetID": assetID,
                "start": start,
                "limit": limit
            });
        });
    }
}
exports.default = Stats;
//# sourceMappingURL=index.js.map