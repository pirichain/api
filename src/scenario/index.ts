import {FetchResponse} from "../config/response";


export default class Scenario extends FetchResponse {
    constructor(baseURL: string) {
        super(baseURL);
    }

    getScenario(address: string): Promise<any> {
        return this.postResponse("/getScenario", {
            "address": address
        });
    }

    createScenario(
        address: string,
        privateKey: string,
        scenarioText: string,
        name: string,
        description: string,
        tags: string[],
        executeOnlyByMe: boolean = false
    ): Promise<any> {
        return this.postResponse("/createScenario", {
            "address": address,
            "privateKey": privateKey,
            "scenarioText": scenarioText,
            "name": name,
            "description": description,
            "tags": tags,
            "executeOnlyByMe": executeOnlyByMe
        });
    }

    editScenario(
        address: string,
        privateKey: string,
        scenarioText: string,
        scenarioAddress: string
    ): Promise<any> {
        return this.postResponse("/editScenario", {
            "address": address,
            "privateKey": privateKey,
            "scenarioText": scenarioText,
            "scenarioAddress": scenarioAddress
        });
    }

    listMyScenarios(ownerAddress: string): Promise<any> {
        return this.postResponse("/listMyScenarios", {
            "ownerAddress": ownerAddress
        });
    }

    listScenarios(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/listScenarios", {
            "skip": skip,
            "limit": limit
        });
    }

    executeScenario(
        scenarioAddress: string,
        address: string,
        privateKey: string,
        method: string,
        params: any = null,
        amount: number = 0,
        assetID: number | null = null
    ): Promise<any> {
        return this.postResponse("/executeScenario", {
            "scenarioAddress": scenarioAddress,
            "address": address,
            "privateKey": privateKey,
            "method": method,
            "params": params,
            "amount": amount,
            "assetID": assetID
        });
    }

    callScenario(
        scenarioAddress: string,
        address: string,
        publicKey: string,
        method: string,
        params: any = [""]
    ): Promise<any> {
        return this.postResponse("/callScenario", {
            "scenarioAddress": scenarioAddress,
            "address": address,
            "publicKey": publicKey,
            "method": method,
            "params": params
        })
    }

    previewScenario(
        scenarioText: string,
        address: string,
        privateKey: string,
        method: string,
        params: any = null
    ): Promise<any> {
        return this.postResponse("/previewScenario", {
            "scenarioText": scenarioText,
            "address": address,
            "privateKey": privateKey,
            "method": method,
            "params": params
        });
    }
}
