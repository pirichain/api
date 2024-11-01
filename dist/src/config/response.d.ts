import { ApisauceInstance } from "apisauce";
import { AxiosRequestConfig } from "axios";
export declare class FetchResponse {
    private client;
    constructor(client: ApisauceInstance);
    getResponse(endpoint: string, params?: any, config?: AxiosRequestConfig): Promise<any>;
    postResponse(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
}
