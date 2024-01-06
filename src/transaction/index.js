class Transaction {
    client;
    constructor(client) {
        this.client = client
    }

    getTransaction(tx) {
        return this.client.post("/getTransaction", {
            "tx": tx
        });
    }

    listPoolTransactions() {
        return this.client.post("/listPoolTransactions");
    }

    listTransactions(skip, limit) {
        return this.client.post("/listTransactions", {
            "skip": skip,
            "limit": limit
        });
    }

    // TODO: limit and address parameter will switch and limit default value will be 50
    listTransactionsByAddr(skip, limit, address) {
        return this.client.post("/listTransactionsByAddr", {
            "skip": skip,
            "limit": limit,
            "address": address
        });
    }

    listTransactionsByAssetID(skip, limit, assetID, desc = false) {
        return this.client.post("/listTransactionsByAssetID", {
            "skip": skip,
            "limit": limit,
            "assetID": assetID,
            "desc": desc.toString()
        });
    }
    getPoolTransaction(tx){
        return this.client.post("/getPoolTransaction", {
            "tx": tx
        });
    }

}

module.exports = Transaction;
