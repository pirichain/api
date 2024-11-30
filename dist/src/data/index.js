"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pushDataRawTransaction_1 = require("./pushDataRawTransaction");
const response_1 = require("../config/response");
class Data extends response_1.FetchResponse {
    constructor(baseURL) {
        super(baseURL);
    }
    decrypt(customID, privateKey, receiptPub = null) {
        return this.postResponse("/decrypt", {
            'customID': customID,
            'privateKey': privateKey,
            "receiptPub": receiptPub
        });
    }
    listData(limit, skip = 0) {
        return this.postResponse("/listData", {
            "limit": limit,
            "skip": skip
        });
    }
    listDataByAddress(address, limit, skip = 0) {
        return this.postResponse("/listDataByAddress", {
            "address": address,
            "limit": limit,
            "skip": skip
        });
    }
    listDataByAddresses(from, to, limit, skip = 0) {
        return this.postResponse("/listDataByAddresses", {
            "from": from,
            "to": to,
            "limit": limit,
            "skip": skip
        });
    }
    pushData(address, privateKey, to, indPubKey, key, value, enc) {
        return this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "indPubKey": indPubKey,
            "customData[]": JSON.stringify({ "key": key, "value": value, "enc": enc })
        });
    }
    pushDataList(address, privateKey, to, customData, indPubKey = null) {
        return this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData,
            "indPubKey": indPubKey
        });
    }
    pushDataListV1(address, privateKey, to, customData) {
        return this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData
        });
    }
    pushDataRawTransaction(address, privateKey, to, customData, receiverPubKey = null, amount = 0) {
        return this.postResponse("/pushDataRawTransaction", (0, pushDataRawTransaction_1.pushDataRawTransaction)(address, privateKey, to, customData, receiverPubKey, amount));
    }
    getPubKey(address) {
        return this.postResponse("/getPubKey", {
            "address": address
        });
    }
}
exports.default = Data;
//# sourceMappingURL=index.js.map