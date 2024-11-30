import { FetchResponse } from "../config/response";
export default class Transaction extends FetchResponse {
    constructor(baseURL: string);
    getTransaction(tx: string): Promise<any>;
    listPoolTransactions(): Promise<any>;
    listTransactions(skip?: number, limit?: number): Promise<any>;
    listTransactionsByAddr(skip: number, limit: number, address: string): Promise<any>;
    listTransactionsByAssetID(skip: number, limit: number, assetID: number, desc?: boolean): Promise<any>;
    getPoolTransaction(tx: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map