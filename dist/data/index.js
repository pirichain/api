import { pushDataRawTransaction } from './pushDataRawTransaction';
import { FetchResponse } from "../config/response";
export default class Data extends FetchResponse {
    constructor(client) {
        super(client);
    }
    async decrypt(customID, privateKey, receiptPub = null) {
        return this.postResponse("/decrypt", {
            'customID': customID,
            'privateKey': privateKey,
            "receiptPub": receiptPub
        });
    }
    async listData(limit, skip = 0) {
        return this.postResponse("/listData", {
            "limit": limit,
            "skip": skip
        });
    }
    async listDataByAddress(address, limit, skip = 0) {
        return this.postResponse("/listDataByAddress", {
            "address": address,
            "limit": limit,
            "skip": skip
        });
    }
    async listDataByAddresses(from, to, limit, skip = 0) {
        return this.postResponse("/listDataByAddresses", {
            "from": from,
            "to": to,
            "limit": limit,
            "skip": skip
        });
    }
    async pushData(address, privateKey, to, indPubKey, key, value, enc) {
        return this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "indPubKey": indPubKey,
            "customData[]": JSON.stringify({ "key": key, "value": value, "enc": enc })
        });
    }
    async pushDataList(address, privateKey, to, customData, indPubKey = null) {
        return this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData,
            "indPubKey": indPubKey
        });
    }
    async pushDataListV1(address, privateKey, to, customData) {
        return this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData
        });
    }
    async pushDataRawTransaction(address, privateKey, to, customData, receiverPubKey = null, amount = 0) {
        return this.postResponse("/pushDataRawTransaction", pushDataRawTransaction(address, privateKey, to, customData, receiverPubKey, amount));
    }
    async getPubKey(address) {
        return this.postResponse("/getPubKey", {
            "address": address
        });
    }
}