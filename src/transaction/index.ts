import {FetchResponse} from "../config/response";


export default class Transaction extends FetchResponse {
    constructor(baseURL: string) {
        super(baseURL);
    }

    getTransaction(tx: string) {
        return this.postResponse("/getTransaction", {
            "tx": tx
        });
    }

    listPoolTransactions() {
        return this.postResponse("/listPoolTransactions");
    }

    listTransactions(skip: number = 0, limit: number = 50) {
        return this.postResponse("/listTransactions", {
            "skip": skip,
            "limit": limit
        });
    }

    listTransactionsByAddr(skip: number, limit: number, address: string) {
        return this.postResponse("/listTransactionsByAddr", {
            "skip": skip,
            "limit": limit || 50,
            "address": address
        });
    }

    listTransactionsByAssetID(skip: number, limit: number, assetID: number, desc: boolean = false) {
        return this.postResponse("/listTransactionsByAssetID", {
            "skip": skip,
            "limit": limit,
            "assetID": assetID,
            "desc": desc.toString()
        });
    }

    getPoolTransaction(tx: string) {
        return this.postResponse("/getPoolTransaction", {
            "tx": tx
        });
    }

}
