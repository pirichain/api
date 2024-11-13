import { FetchResponse } from "../config/response";
import { AxiosInstance } from "axios";
export declare class Utility extends FetchResponse {
    constructor(client: AxiosInstance);
    isValidAddress: (address: string) => boolean;
    search(value: string): Promise<any>;
}
