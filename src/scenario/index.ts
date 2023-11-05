import {ApisauceInstance} from "apisauce";

class Scenario {
    private client: ApisauceInstance;

    constructor(client: ApisauceInstance) {
        this.client = client;
    }

    getScenario(address: string) {
        return this.client.post("/getScenario", {
            address,
        });
    }

    createScenario(
        address: string,
        privateKey: string,
        scenarioText: string,
        name: string,
        description: string,
        tags: string,
        executeOnlyByMe: boolean = false
    ) {
        return this.client.post("/createScenario", {
            address,
            privateKey,
            scenarioText,
            name,
            description,
            tags,
            executeOnlyByMe,
        });
    }

    editScenario(
        address: string,
        privateKey: string,
        scenarioText: string,
        scenarioAddress: string
    ) {
        return this.client.post("/editScenario", {
            address,
            privateKey,
            scenarioText,
            scenarioAddress,
        });
    }

    listMyScenarios(ownerAddress: string) {
        return this.client.post("/listMyScenarios", {
            ownerAddress,
        });
    }

    listScenarios(skip: number = 0, limit: number = 10) {
        return this.client.post("/listScenarios", {
            skip,
            limit,
        });
    }

    executeScenario(
        scenarioAddress: string,
        address: string,
        privateKey: string,
        method: string,
        params: any | null = null,
        amount: number = 0,
        assetID: string | null = null
    ) {
        return this.client.post("/executeScenario", {
            scenarioAddress,
            address,
            privateKey,
            method,
            params,
            amount,
            assetID,
        });
    }

    previewScenario(
        scenarioText: string,
        address: string,
        privateKey: string,
        method: string,
        params: any | null = null
    ) {
        return this.client.post("/previewScenario", {
            scenarioText,
            address,
            privateKey,
            method,
            params,
        });
    }
}

export default Scenario;
