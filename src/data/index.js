const {pushDataRawTransaction} = require("./pushDataRawTransaction");

class Data {
    client;

    constructor(client) {
        this.client = client
    }

    decrypt(customID, privateKey, receiptPub = null) {
        return this.client.post("/decrypt", {
            'customID': customID,
            'privateKey': privateKey,
            "receiptPub": receiptPub
        });
    }

    listData(limit, skip = 0) {
        return this.client.post("/listData", {
            "limit": limit,
            "skip": skip
        });
    }

    listDataByAddress(address, limit, skip = 0) {
        return this.client.post("/listDataByAddress", {
            "address": address,
            "limit": limit,
            "skip": skip
        });
    }

    listDataByAddresses(from, to, limit, skip = 0) {
        return this.client.post("/listDataByAddresses", {
            "from": from,
            "to": to,
            "limit": limit,
            "skip": skip
        });
    }

    pushData(address, privateKey, to, indPubKey, key, value, enc) {
        return this.client.post("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "indPubKey": indPubKey,
            "customData[]": JSON.stringify({"key": key, "value": value, "enc": enc})
        });
    }

    pushDataList(address, privateKey, to, customData, indPubKey = null) {
        return this.client.post("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData,
            "indPubKey": indPubKey
        });
    }


    pushDataListV1(address, privateKey, to, customData) {
        return this.client.post("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData
        });
    }

    pushDataRawTransaction(address, privateKey, to, customData, receiverPubKey = null, amount = 0) {
        return pushDataRawTransaction(this.client, address, privateKey, to, customData, receiverPubKey, amount)
    }

}

module.exports = Data
