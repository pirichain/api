import { FetchResponse } from "../config/response";
export default class Scenario extends FetchResponse {
    constructor(client) {
        super(client);
    }
    async getScenario(address) {
        return this.postResponse("/getScenario", {
            "address": address
        });
    }
    async createScenario(address, privateKey, scenarioText, name, description, tags, executeOnlyByMe = false) {
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
    async editScenario(address, privateKey, scenarioText, scenarioAddress) {
        return this.postResponse("/editScenario", {
            "address": address,
            "privateKey": privateKey,
            "scenarioText": scenarioText,
            "scenarioAddress": scenarioAddress
        });
    }
    async listMyScenarios(ownerAddress) {
        return this.postResponse("/listMyScenarios", {
            "ownerAddress": ownerAddress
        });
    }
    async listScenarios(skip = 0, limit = 10) {
        return this.postResponse("/listScenarios", {
            "skip": skip,
            "limit": limit
        });
    }
    async executeScenario(scenarioAddress, address, privateKey, method, params = null, amount = 0, assetID = null) {
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
    async callScenario(scenarioAddress, address, publicKey, method, params = [""]) {
        return this.postResponse("/callScenario", {
            "scenarioAddress": scenarioAddress,
            "address": address,
            "publicKey": publicKey,
            "method": method,
            "params": params
        });
    }
    async previewScenario(scenarioText, address, privateKey, method, params = null) {
        return this.postResponse("/previewScenario", {
            "scenarioText": scenarioText,
            "address": address,
            "privateKey": privateKey,
            "method": method,
            "params": params
        });
    }
}
