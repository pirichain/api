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
const pushDataRawTransaction_1 = require("./pushDataRawTransaction");
const response_1 = require("../config/response");
class Data extends response_1.FetchResponse {
    constructor(client) {
        super(client);
    }
    decrypt(customID_1, privateKey_1) {
        return __awaiter(this, arguments, void 0, function* (customID, privateKey, receiptPub = null) {
            return yield this.postResponse("/decrypt", {
                'customID': customID,
                'privateKey': privateKey,
                "receiptPub": receiptPub
            });
        });
    }
    listData(limit_1) {
        return __awaiter(this, arguments, void 0, function* (limit, skip = 0) {
            return yield this.postResponse("/listData", {
                "limit": limit,
                "skip": skip
            });
        });
    }
    listDataByAddress(address_1, limit_1) {
        return __awaiter(this, arguments, void 0, function* (address, limit, skip = 0) {
            return yield this.postResponse("/listDataByAddress", {
                "address": address,
                "limit": limit,
                "skip": skip
            });
        });
    }
    listDataByAddresses(from_1, to_1, limit_1) {
        return __awaiter(this, arguments, void 0, function* (from, to, limit, skip = 0) {
            return yield this.postResponse("/listDataByAddresses", {
                "from": from,
                "to": to,
                "limit": limit,
                "skip": skip
            });
        });
    }
    pushData(address, privateKey, to, indPubKey, key, value, enc) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/pushData", {
                "address": address,
                "privateKey": privateKey,
                "to": to,
                "indPubKey": indPubKey,
                "customData[]": JSON.stringify({ "key": key, "value": value, "enc": enc })
            });
        });
    }
    pushDataList(address_1, privateKey_1, to_1, customData_1) {
        return __awaiter(this, arguments, void 0, function* (address, privateKey, to, customData, indPubKey = null) {
            return yield this.postResponse("/pushData", {
                "address": address,
                "privateKey": privateKey,
                "to": to,
                "customData": customData,
                "indPubKey": indPubKey
            });
        });
    }
    pushDataListV1(address, privateKey, to, customData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/pushData", {
                "address": address,
                "privateKey": privateKey,
                "to": to,
                "customData": customData
            });
        });
    }
    pushDataRawTransaction(address_1, privateKey_1, to_1, customData_1) {
        return __awaiter(this, arguments, void 0, function* (address, privateKey, to, customData, receiverPubKey = null, amount = 0) {
            return yield this.postResponse("/pushDataRawTransaction", (0, pushDataRawTransaction_1.pushDataRawTransaction)(address, privateKey, to, customData, receiverPubKey, amount));
        });
    }
    getPubKey(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getPubKey", {
                "address": address
            });
        });
    }
}
exports.default = Data;
//# sourceMappingURL=index.js.map