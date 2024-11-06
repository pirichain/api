import { FetchResponse } from "../config/response";
import { AxiosInstance } from "axios";
interface ITransaction {
    getTransaction(tx: string): Promise<any>;
    listPoolTransactions(): Promise<any>;
    listTransactions(skip?: number, limit?: number): Promise<any>;
    listTransactionsByAddr(skip: number, limit: number, address: string): Promise<any>;
    listTransactionsByAssetID(skip: number, limit: number, assetID: number, desc?: boolean): Promise<any>;
    getPoolTransaction(tx: string): Promise<any>;
}
declare class Transaction extends FetchResponse implements ITransaction {
    constructor(client: AxiosInstance);
    getTransaction(tx: string): Promise<any>;
    listPoolTransactions(): Promise<any>;
    listTransactions(skip?: number, limit?: number): Promise<any>;
    listTransactionsByAddr(skip: number, limit: number, address: string): Promise<any>;
    listTransactionsByAssetID(skip: number, limit: number, assetID: number, desc?: boolean): Promise<any>;
    getPoolTransaction(tx: string): Promise<any>;
}
export default Transaction;
export { ITransaction };
