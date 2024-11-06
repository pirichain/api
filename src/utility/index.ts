import {isValidAddress} from './isValidAddress';
import {FetchResponse} from "../config/response";
import {AxiosInstance} from "axios";

interface IUtility {
    isValidAddress(address: string): boolean;
    search(value: string): Promise<any>;
}

class Utility extends FetchResponse implements IUtility {
    constructor(client: AxiosInstance) {
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
