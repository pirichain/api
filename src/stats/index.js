class Stats {
    constructor(client) {
        this.client = client;
    }
    getCirculation(){
        return this.client.post("/getCirculation");
    }
    getDetailStats(assetID = null){
        return this.client.post("/getDetailStats", {
            "assetID": assetID
        });
    }
    getRichList(assetID, limit, skip){
        return this.client.post("/getRichList", {
            "assetID": assetID,
            "limit": limit,
            "skip": skip
        });
    }
    getStats(){
        return this.client.post("/getStats");
    }

}

module.exports = Stats
