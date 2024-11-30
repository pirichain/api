"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../config/response");
class Transaction extends response_1.FetchResponse {
    constructor(baseURL) {
        super(baseURL);
    }
    getTransaction(tx) {
        return this.postResponse("/getTransaction", {
            "tx": tx
        });
    }
    listPoolTransactions() {
        return this.postResponse("/listPoolTransactions");
    }
    listTransactions(skip = 0, limit = 50) {
        return this.postResponse("/listTransactions", {
            "skip": skip,
            "limit": limit
        });
    }
    listTransactionsByAddr(skip, limit, address) {
        return this.postResponse("/listTransactionsByAddr", {
            "skip": skip,
            "limit": limit || 50,
            "address": address
        });
    }
    listTransactionsByAssetID(skip, limit, assetID, desc = false) {
        return this.postResponse("/listTransactionsByAssetID", {
            "skip": skip,
            "limit": limit,
            "assetID": assetID,
            "desc": desc.toString()
        });
    }
    getPoolTransaction(tx) {
        return this.postResponse("/getPoolTransaction", {
            "tx": tx
        });
    }
}
exports.default = Transaction;
//# sourceMappingURL=index.js.map