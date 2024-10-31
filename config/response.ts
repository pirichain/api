import {ApisauceInstance} from "apisauce";
import {AxiosRequestConfig} from "axios";

export class FetchResponse {
    private client: ApisauceInstance;

    constructor(client: ApisauceInstance) {
        this.client = client;
    }

    async getResponse(endpoint: string, params?: any, config?: AxiosRequestConfig): Promise<any> {
        try {
            const result = await this.client.get(endpoint, params, config);
            if (result.ok) {
                return result.data;
            }
            return {error: 1, message: result.problem}
        } catch (e) {
            return {error: 1, message: e}
        }
    }

    async postResponse(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
        try {
            const result = await this.client.post(endpoint, data, config);
            if (result.ok) {
                return result.data;
            }
            return {error: 1, message: result.problem}
        } catch (e) {
            return {error: 1, message: e}
        }
    }
}
