import {isValidAddress} from './isValidAddress';
import {FetchResponse} from "../config/response";
import {AxiosInstance} from '../utility/modules';


export default class Utility extends FetchResponse {
    constructor(client: AxiosInstance) {
        super(client);
    }

    isValidAddress = (address: string): boolean => isValidAddress(address);

    async search(value: string): Promise<any> {
        return this.postResponse('/search', {
            value: value
        });
    }
}
