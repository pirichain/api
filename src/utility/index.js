const {isValidAddress} = require("./isValidAddress");

class Utility {
    client;
    constructor(client) {
        this.client = client
    }

    isValidAddress = (address) => isValidAddress(address);
    search(value){
        return this.client.post("/search", {
            'value': value
        });
    }
}

module.exports = Utility;
