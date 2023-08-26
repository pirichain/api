class Data {
    constructor(client) {
        this.client = client
    }

    decrypt(customID, privateKey, receiptPub) {
        return this.client.post("/decrypt", {
            'customID': customID,
            'privateKey': privateKey,
            "receiptPub": receiptPub
        });
    }

    getAddressListByAsset(assetID, start, limit) {
        return this.client.post("/getAddressListByAsset", {
            "assetID": assetID,
            "start": start,
            "limit": limit
        });
    }

    listData(limit, skip) {
        return this.client.post("/listData", {
            "limit": limit,
            "skip": skip
        });
    }

    listDataByAddress(address, limit, skip) {
        return this.client.post("/listDataByAddress", {
            "address": address,
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

    pushDataList(address, privateKey, to, customData, indPubKey) {
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

}

module.exports = Data
