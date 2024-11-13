import { FetchResponse } from "../config/response";
import { AxiosInstance } from '../utility/modules';
export default class Utility extends FetchResponse {
    constructor(client: AxiosInstance);
    isValidAddress: (address: string) => boolean;
    search(value: string): Promise<any>;
}
