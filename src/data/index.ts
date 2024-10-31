import {ApisauceInstance} from 'apisauce';
import {pushDataRawTransaction} from './pushDataRawTransaction';
import {FetchResponse} from "../../config/response";

class Data extends FetchResponse {
    constructor(client: ApisauceInstance) {
        super(client);
    }

    async decrypt(customID: string, privateKey: string, receiptPub: string | null = null): Promise<any> {
        return await this.postResponse("/decrypt", {
            'customID': customID,
            'privateKey': privateKey,
            "receiptPub": receiptPub
        });
    }

    async listData(limit: number, skip: number = 0): Promise<any> {
        return await this.postResponse("/listData", {
            "limit": limit,
            "skip": skip
        });
    }

    async listDataByAddress(address: string, limit: number, skip: number = 0): Promise<any> {
        return await this.postResponse("/listDataByAddress", {
            "address": address,
            "limit": limit,
            "skip": skip
        });
    }

    async listDataByAddresses(from: string, to: string, limit: number, skip: number = 0): Promise<any> {
        return await this.postResponse("/listDataByAddresses", {
            "from": from,
            "to": to,
            "limit": limit,
            "skip": skip
        });
    }

    async pushData(address: string, privateKey: string, to: string, indPubKey: string, key: string, value: string, enc: number): Promise<any> {
        return await this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "indPubKey": indPubKey,
            "customData[]": JSON.stringify({"key": key, "value": value, "enc": enc})
        });
    }

    async pushDataList(address: string, privateKey: string, to: string, customData: any[], indPubKey: string | null = null): Promise<any> {
        return await this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData,
            "indPubKey": indPubKey
        });
    }

    async pushDataListV1(address: string, privateKey: string, to: string, customData: any[]): Promise<any> {
        return await this.postResponse("/pushData", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "customData": customData
        });
    }

    async pushDataRawTransaction(address: string, privateKey: string, to: string | null, customData: any[], receiverPubKey: string | null = null, amount: number = 0): Promise<any> {
        return await this.postResponse(
            "/pushDataRawTransaction",
            pushDataRawTransaction(address, privateKey, to, customData, receiverPubKey, amount)
        );
    }

    async getPubKey(address: string): Promise<any> {
        return await this.postResponse("/getPubKey", {
            "address": address
        });
    }
}

export default Data;
