import { ApisauceInstance } from "apisauce";
import { FetchResponse } from "../config/response";
interface IUtility {
    isValidAddress(address: string): boolean;
    search(value: string): Promise<any>;
}
declare class Utility extends FetchResponse implements IUtility {
    constructor(client: ApisauceInstance);
    isValidAddress: (address: string) => boolean;
    search(value: string): Promise<any>;
}
export default Utility;
export { IUtility };
