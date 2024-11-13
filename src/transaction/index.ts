import {FetchResponse} from "../config/response";
import {AxiosInstance} from "axios";


export class Transaction extends FetchResponse {
    constructor(client: AxiosInstance) {
        super(client);
    }

    async getTransaction(tx: string) {
        return this.postResponse("/getTransaction", {
            "tx": tx
        });
    }

    async listPoolTransactions() {
        return this.postResponse("/listPoolTransactions");
    }

    async listTransactions(skip: number = 0, limit: number = 50) {
        return this.postResponse("/listTransactions", {
            "skip": skip,
            "limit": limit
        });
    }

    async listTransactionsByAddr(skip: number, limit: number, address: string) {
        return this.postResponse("/listTransactionsByAddr", {
            "skip": skip,
            "limit": limit || 50,
            "address": address
        });
    }

    async listTransactionsByAssetID(skip: number, limit: number, assetID: number, desc: boolean = false) {
        return this.postResponse("/listTransactionsByAssetID", {
            "skip": skip,
            "limit": limit,
            "assetID": assetID,
            "desc": desc.toString()
        });
    }

    async getPoolTransaction(tx: string) {
        return this.postResponse("/getPoolTransaction", {
            "tx": tx
        });
    }

}
