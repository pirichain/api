import {isValidAddress} from './isValidAddress';
import {ApisauceInstance} from "apisauce";
import {FetchResponse} from "../config/response";

interface IUtility {
    isValidAddress(address: string): boolean;
    search(value: string): Promise<any>;
}

class Utility extends FetchResponse implements IUtility {
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
export {IUtility};
