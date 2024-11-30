import {pushDataRawTransaction} from './pushDataRawTransaction';
import {FetchResponse} from "../config/response";

export default class Data extends FetchResponse {
    constructor(baseURL: string) {
        super(baseURL);
    }

    decrypt(customID: string, privateKey: string, receiptPub: string | null = null): Promise<any> {
        return this.postResponse("/decrypt", {
            'customID': customID,
            'privateKey': privateKey,
            "receiptPub": receiptPub
        });
    }

    listData(limit: number, skip: number = 0): Promise<any> {
        return this.postResponse("/listData", {
            "limit": limit,
            "skip": skip
        });
    }

    listDataByAddress(address: string, limit: number, skip: number = 0): Promise<any> {
        return this.postResponse("/listDataByAddress", {
            "address": address,
            "limit": limit,
            "skip": skip
        });
    }

    listDataByAddresses(from: string, to: string, limit: number, skip: number = 0): Promise<any> {
        return this.postResponse("/listDataByAddresses", {
            "from": from,
            "to": to,
            "limit": limit,
            "skip": skip
        });
    }

    pushData(address: string, privateKey: string, to: string, indPubKey: string, key: string, value: string, enc: number): Promise<any> {
        return this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "indPubKey": indPubKey,
            "customData[]": JSON.stringify({"key": key, "value": value, "enc": enc})
        });
    }

    pushDataList(address: string, privateKey: string, to: string, customData: any[], indPubKey: string | null = null): Promise<any> {
        return this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData,
            "indPubKey": indPubKey
        });
    }

    pushDataListV1(address: string, privateKey: string, to: string, customData: any[]): Promise<any> {
        return this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData
        });
    }

    pushDataRawTransaction(address: string, privateKey: string, to: string | null, customData: any[], receiverPubKey: string | null = null, amount: number = 0): Promise<any> {
        return this.postResponse(
            "/pushDataRawTransaction",
            pushDataRawTransaction(address, privateKey, to, customData, receiverPubKey, amount)
        );
    }

    getPubKey(address: string): Promise<any> {
        return this.postResponse("/getPubKey", {
            "address": address
        });
    }
}
