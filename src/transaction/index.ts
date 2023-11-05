import {ApisauceInstance} from "apisauce";

class Transaction {
    private client: ApisauceInstance;

    constructor(client: ApisauceInstance) {
        this.client = client;
    }

    getTransaction(tx: string) {
        return this.client.post("/getTransaction", {
            "tx": tx
        });
    }

    listPoolTransactions() {
        return this.client.post("/listPoolTransactions");
    }

    listTransactions(skip: number, limit: number) {
        return this.client.post("/listTransactions", {
            "skip": skip,
            "limit": limit
        });
    }

    // TODO: limit and address parameter will switch and limit default value will be 50
    listTransactionsByAddr(skip: number, address: string, limit: number = 50) {
        return this.client.post("/listTransactionsByAddr", {
            "skip": skip,
            "limit": limit,
            "address": address
        });
    }

    listTransactionsByAssetID(skip: number, assetID: string, limit: number, desc: boolean = false) {
        return this.client.post("/listTransactionsByAssetID", {
            "skip": skip,
            "limit": limit,
            "assetID": assetID,
            "desc": desc.toString()
        });
    }

    getPoolTransaction(tx: string) {
        return this.client.post("/getPoolTransaction", {
            "tx": tx
        });
    }
}

export default Transaction;
