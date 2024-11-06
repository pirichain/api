import { FetchResponse } from "../config/response";
import { AxiosInstance } from "axios";
interface IUtility {
    isValidAddress(address: string): boolean;
    search(value: string): Promise<any>;
}
declare class Utility extends FetchResponse implements IUtility {
    constructor(client: AxiosInstance);
    isValidAddress: (address: string) => boolean;
    search(value: string): Promise<any>;
}
export default Utility;
export { IUtility };
