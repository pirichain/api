import {ApisauceInstance} from 'apisauce';
import {FetchResponse} from "../../config/response";

class Scenario extends FetchResponse {
    constructor(client: ApisauceInstance) {
        super(client);
    }

    async getScenario(address: string): Promise<any> {
        return await this.postResponse("/getScenario", {
            "address": address
        });
    }

    async createScenario(
        address: string,
        privateKey: string,
        scenarioText: string,
        name: string,
        description: string,
        tags: string[],
        executeOnlyByMe: boolean = false
    ): Promise<any> {
        return await this.postResponse("/createScenario", {
            "address": address,
            "privateKey": privateKey,
            "scenarioText": scenarioText,
            "name": name,
            "description": description,
            "tags": tags,
            "executeOnlyByMe": executeOnlyByMe
        });
    }

    async editScenario(
        address: string,
        privateKey: string,
        scenarioText: string,
        scenarioAddress: string
    ): Promise<any> {
        return await this.postResponse("/editScenario", {
            "address": address,
            "privateKey": privateKey,
            "scenarioText": scenarioText,
            "scenarioAddress": scenarioAddress
        });
    }

    async listMyScenarios(ownerAddress: string): Promise<any> {
        return await this.postResponse("/listMyScenarios", {
            "ownerAddress": ownerAddress
        });
    }

    async listScenarios(skip: number = 0, limit: number = 10): Promise<any> {
        return await this.postResponse("/listScenarios", {
            "skip": skip,
            "limit": limit
        });
    }

    async executeScenario(
        scenarioAddress: string,
        address: string,
        privateKey: string,
        method: string,
        params: any = null,
        amount: number = 0,
        assetID: number | null = null
    ): Promise<any> {
        return await this.postResponse("/executeScenario", {
            "scenarioAddress": scenarioAddress,
            "address": address,
            "privateKey": privateKey,
            "method": method,
            "params": params,
            "amount": amount,
            "assetID": assetID
        });
    }

    async previewScenario(
        scenarioText: string,
        address: string,
        privateKey: string,
        method: string,
        params: any = null
    ): Promise<any> {
        return await this.postResponse("/previewScenario", {
            "scenarioText": scenarioText,
            "address": address,
            "privateKey": privateKey,
            "method": method,
            "params": params
        });
    }
}

export default Scenario;
