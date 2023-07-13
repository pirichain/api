class Utility {
    constructor(client) {
        this.client = client
    }
    isValidAddress(address){
        return this.client.post("/isValidAddress", {
            'address': address
        });
    }
    search(value){
        return this.client.post("/search", {
            'value': value
        });
    }
    verifyAddress(address){
        return this.client.post("/verifyAddress", {
            'address': address
        });
    }

}

module.exports = Utility;
