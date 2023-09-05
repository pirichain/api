class Buypiri {
    constructor(client) {
        this.client = client
    }
    givemePiri(address){
        return this.client.post("/givemePiri", {
            "address": address
        });
    }

}

module.exports = Buypiri
