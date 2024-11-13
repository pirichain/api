import { isValidAddress } from './isValidAddress';
import { FetchResponse } from "../config/response";
export class Utility extends FetchResponse {
    constructor(client) {
        super(client);
        this.isValidAddress = (address) => isValidAddress(address);
    }
    async search(value) {
        return this.postResponse('/search', {
            value: value
        });
    }
}
//# sourceMappingURL=index.js.map