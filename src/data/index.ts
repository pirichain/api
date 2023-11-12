import {ApisauceInstance} from "apisauce";

class Data {
    private client: ApisauceInstance;

    constructor(client: ApisauceInstance) {
        this.client = client;
    }

    decrypt(customID: string, privateKey: string, receiptPub: string | null = null) {
        return this.client.post("/decrypt", {
            customID,
            privateKey,
            receiptPub,
        });
    }

    listData(limit: number, skip: number = 0) {
        return this.client.post("/listData", {
            limit,
            skip,
        });
    }

    listDataByAddress(address: string, limit: number, skip: number = 0) {
        return this.client.post("/listDataByAddress", {
            address,
            limit,
            skip,
        });
    }

    listDataByAddresses(from: string, to: string, limit: number, skip: number = 0) {
        return this.client.post("/listDataByAddresses", {
            from,
            to,
            limit,
            skip
        });
    }

    pushData(
        address: string,
        privateKey: string,
        to: string,
        indPubKey: string,
        key: string,
        value: string,
        enc: string
    ) {
        return this.client.post("/pushData", {
            address,
            privateKey,
            to,
            indPubKey,
            customData: JSON.stringify({ key, value, enc }),
        });
    }

    // TODO: This method will combine with other pushData Methods.
    pushDataList(
        address: string,
        privateKey: string,
        to: string,
        customData: any[],
        indPubKey: string | null = null
    ) {
        return this.client.post("/pushData", {
            address,
            privateKey,
            to,
            customData,
            indPubKey,
        });
    }

    pushDataListV1(address: string, privateKey: string, to: string, customData: any[]) {
        return this.client.post("/pushData", {
            address,
            privateKey,
            to,
            customData,
        });
    }
}

export default Data;
