import {FetchResponse} from "../config/response";
import {AxiosInstance} from "axios";

interface ITransaction {
    getTransaction(tx: string): Promise<any>;
    listPoolTransactions(): Promise<any>;
    listTransactions(skip?: number, limit?: number): Promise<any>;
    listTransactionsByAddr(skip: number, limit: number, address: string): Promise<any>;
    listTransactionsByAssetID(skip: number, limit: number, assetID: number, desc?: boolean): Promise<any>;
    getPoolTransaction(tx: string): Promise<any>;
}

class Transaction extends FetchResponse implements ITransaction {
    constructor(client: AxiosInstance) {
        super(client);
    }

    async getTransaction(tx: string) {
        return await this.postResponse("/getTransaction", {
            "tx": tx
        });
    }

    async listPoolTransactions() {
        return await this.postResponse("/listPoolTransactions");
    }

    async listTransactions(skip: number = 0, limit: number = 50) {
        return await this.postResponse("/listTransactions", {
            "skip": skip,
            "limit": limit
        });
    }

    async listTransactionsByAddr(skip: number, limit: number, address: string) {
        return await this.postResponse("/listTransactionsByAddr", {
            "skip": skip,
            "limit": limit || 50,
            "address": address
        });
    }

    async listTransactionsByAssetID(skip: number, limit: number, assetID: number, desc: boolean = false) {
        return await this.postResponse("/listTransactionsByAssetID", {
            "skip": skip,
            "limit": limit,
            "assetID": assetID,
            "desc": desc.toString()
        });
    }

    async getPoolTransaction(tx: string) {
        return await this.postResponse("/getPoolTransaction", {
            "tx": tx
        });
    }

}

export default Transaction;
export {ITransaction};
