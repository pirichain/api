import { FetchResponse } from "../config/response";
export class Transaction extends FetchResponse {
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
//# sourceMappingURL=index.js.map