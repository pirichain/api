import {isValidAddress} from './isValidAddress';
import {FetchResponse} from "../config/response";


export default class Utility extends FetchResponse {
    constructor(baseURL: string) {
        super(baseURL);
    }

    isValidAddress = (address: string): boolean => isValidAddress(address);

    search(value: string): Promise<any> {
        return this.postResponse('/search', {
            value: value
        });
    }
}
