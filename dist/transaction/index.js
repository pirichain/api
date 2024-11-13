"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const response_1 = require("../config/response");
class Transaction extends response_1.FetchResponse {
    constructor(client) {
        super(client);
    }
    async getTransaction(tx) {
        return this.postResponse("/getTransaction", {
            "tx": tx
        });
    }
    async listPoolTransactions() {
        return this.postResponse("/listPoolTransactions");
    }
    async listTransactions(skip = 0, limit = 50) {
        return this.postResponse("/listTransactions", {
            "skip": skip,
            "limit": limit
        });
    }
    async listTransactionsByAddr(skip, limit, address) {
        return this.postResponse("/listTransactionsByAddr", {
            "skip": skip,
            "limit": limit || 50,
            "address": address
        });
    }
    async listTransactionsByAssetID(skip, limit, assetID, desc = false) {
        return this.postResponse("/listTransactionsByAssetID", {
            "skip": skip,
            "limit": limit,
            "assetID": assetID,
            "desc": desc.toString()
        });
    }
    async getPoolTransaction(tx) {
        return this.postResponse("/getPoolTransaction", {
            "tx": tx
        });
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=index.js.map