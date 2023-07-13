class Buypiri {
    constructor(client) {
        this.client = client
    }

    createAddressForBuyPiri(type){
        return this.client.post("/createAddressForBuyPiri", {
            "type": type,
        });
    }
    getBalanceForBuyPiri(type, address, piriAddress){
        return this.client.post("/getBalanceForBuyPiri", {
            "type": type,
            "address": address,
            "piriAddress": piriAddress
        });
    }
    getPiriPrice(type){
        return this.client.post("/getPiriPrice", {
            "type": type
        });
    }
    givemePiri(address){
        return this.client.post("/givemePiri", {
            "address": address
        });
    }

}

module.exports = Buypiri
