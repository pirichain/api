import {AxiosInstance, AxiosRequestConfig} from "axios";

export class FetchResponse {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async getResponse(endpoint: string, config?: AxiosRequestConfig): Promise<any> {
        try {
            const result = await this.client.get(endpoint, config);

            if (result.status === 200)
                return result.data

            return {error: 1, message: result.data}
        } catch (error) {
            return {error: 1, message: error.message}
        }
    }

    async postResponse(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
        try {
            const result = await this.client.post(endpoint, data, config);

            if (result.status === 200)
                return result.data

            return {error: 1, type: {status: result.status, statusText: result.statusText}, message: result.data}
        } catch (error) {
            return {error: 1, type: {status: 0, statusText: "exception"}, message: error.message}
        }
    }
}
