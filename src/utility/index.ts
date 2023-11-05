import {ApisauceInstance} from "apisauce";
import {isValidAddress} from "./isValidAddress";

class Utility {
    private client: ApisauceInstance;

    constructor(client: ApisauceInstance) {
        this.client = client;
    }

    isValidAddress = (address: string) => isValidAddress(address);

    search(value: string) {
        return this.client.post("/search", {
            'value': value
        });
    }
}

export default Utility;
