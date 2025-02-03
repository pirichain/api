export class FetchResponse {
    private readonly baseURL: string

    constructor(baseURL: string) {
        this.baseURL = baseURL
    }

    async getResponse(endpoint: string, config?: RequestInit): Promise<any> {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {method: "GET", ...config});

            if (response.ok) {
                return await response.json();
            }

            return {error: 1, message: await response.text()};
        } catch (error: any) {
            return {error: 1, message: error.message};
        }
    }

    async postResponse(endpoint: string, data?: any, config?: RequestInit): Promise<any> {
        try {
            const _config = {
                method: "POST",
                body: data ? JSON.stringify(data) : "",
                headers: config?.headers || {
                    "Content-Type": "application/json"
                },
                ...config,
            }
            const response = await fetch(`${this.baseURL}${endpoint}`, _config);

            if (response.ok) {
                try {
                    return await response.json();
                } catch {
                    const text = await response.formData();
                    console.error(text);
                    return text
                }
            }

            return {
                error: 1,
                type: {status: response.status, statusText: response.statusText},
                message: await response.text(),
            };
        } catch (error: any) {
            return {
                error: 1,
                type: {status: 0, statusText: "exception"},
                message: error.message,
            };
        }
    }
}
