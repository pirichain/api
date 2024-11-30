import { FetchResponse } from "../config/response";
export default class Data extends FetchResponse {
    constructor(baseURL: string);
    decrypt(customID: string, privateKey: string, receiptPub?: string | null): Promise<any>;
    listData(limit: number, skip?: number): Promise<any>;
    listDataByAddress(address: string, limit: number, skip?: number): Promise<any>;
    listDataByAddresses(from: string, to: string, limit: number, skip?: number): Promise<any>;
    pushData(address: string, privateKey: string, to: string, indPubKey: string, key: string, value: string, enc: number): Promise<any>;
    pushDataList(address: string, privateKey: string, to: string, customData: any[], indPubKey?: string | null): Promise<any>;
    pushDataListV1(address: string, privateKey: string, to: string, customData: any[]): Promise<any>;
    pushDataRawTransaction(address: string, privateKey: string, to: string | null, customData: any[], receiverPubKey?: string | null, amount?: number): Promise<any>;
    getPubKey(address: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map