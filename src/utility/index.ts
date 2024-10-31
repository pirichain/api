import {isValidAddress} from './isValidAddress';
import {ApisauceInstance} from "apisauce";
import {FetchResponse} from "../../config/response";

class Utility extends FetchResponse {
    constructor(client: ApisauceInstance) {
        super(client);
    }

    isValidAddress = (address: string): boolean => isValidAddress(address);

    async search(value: string): Promise<any> {
        return await this.postResponse('/search', {
            value: value
        });
    }
}

export default Utility;
