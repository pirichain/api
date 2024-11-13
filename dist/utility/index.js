import { isValidAddress } from './isValidAddress';
import { FetchResponse } from "../config/response";
export default class Utility extends FetchResponse {
    constructor(client) {
        super(client);
    }
    isValidAddress = (address) => isValidAddress(address);
    async search(value) {
        return this.postResponse('/search', {
            value: value
        });
    }
}
