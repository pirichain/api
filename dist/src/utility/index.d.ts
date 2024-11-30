import { FetchResponse } from "../config/response";
export default class Utility extends FetchResponse {
    constructor(baseURL: string);
    isValidAddress: (address: string) => boolean;
    search(value: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map