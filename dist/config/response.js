export class FetchResponse {
    constructor(client) {
        this.client = client;
    }
    async getResponse(endpoint, config) {
        try {
            const result = await this.client.get(endpoint, config);
            if (result.status === 200)
                return result.data;
            return { error: 1, message: result.data };
        }
        catch (error) {
            return { error: 1, message: error.message };
        }
    }
    async postResponse(endpoint, data, config) {
        try {
            const result = await this.client.post(endpoint, data, config);
            if (result.status === 200)
                return result.data;
            return { error: 1, type: { status: result.status, statusText: result.statusText }, message: result.data };
        }
        catch (error) {
            return { error: 1, type: { status: 0, statusText: "exception" }, message: error.message };
        }
    }
}
