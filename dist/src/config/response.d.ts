export declare class FetchResponse {
    private readonly baseURL;
    constructor(baseURL: string);
    getResponse(endpoint: string, config?: RequestInit): Promise<any>;
    postResponse(endpoint: string, data?: any, config?: RequestInit): Promise<any>;
}
//# sourceMappingURL=response.d.ts.map