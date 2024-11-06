import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FetchResponse {
    private client;
    constructor(client: AxiosInstance);
    getResponse(endpoint: string, config?: AxiosRequestConfig): Promise<any>;
    postResponse(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
}
