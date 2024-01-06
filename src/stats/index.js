class Stats {
    client;
    constructor(client) {
        this.client = client;
    }
    getCirculation(){
        return this.client.post("/getCirculation");
    }
    getTotalBurnedPiri(){
        return this.client.post("/getTotalBurnedPiri");
    }
    getDetailStats(assetID = null){
        return this.client.post("/getDetailStats", {
            "assetID": assetID
        });
    }
    getRichList(assetID, limit, skip = 0){
        return this.client.post("/getRichList", {
            "assetID": assetID,
            "limit": limit,
            "skip": skip
        });
    }
    getStats(){
        return this.client.post("/getStats");
    }
    getAddressListByAsset(assetID, start, limit) {
        return this.client.post("/getAddressListByAsset", {
            "assetID": assetID,
            "start": start,
            "limit": limit
        });
    }

}

module.exports = Stats
