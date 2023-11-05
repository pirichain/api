import {ApisauceInstance} from "apisauce";

class Stats {
    private client: ApisauceInstance;

    constructor(client: ApisauceInstance) {
        this.client = client;
    }

    getCirculation() {
        return this.client.post("/getCirculation");
    }

    getTotalBurnedPiri() {
        return this.client.post("/getTotalBurnedPiri");
    }

    getDetailStats(assetID: string | null = null) {
        return this.client.post("/getDetailStats", {
            assetID,
        });
    }

    getRichList(assetID: string, limit: number, skip: number = 0) {
        return this.client.post("/getRichList", {
            assetID,
            limit,
            skip,
        });
    }

    getStats() {
        return this.client.post("/getStats");
    }

    getAddressListByAsset(assetID: string, start: number, limit: number) {
        return this.client.post("/getAddressListByAsset", {
            assetID,
            start,
            limit,
        });
    }
}

export default Stats;
