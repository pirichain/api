"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../config/response");
class Scenario extends response_1.FetchResponse {
    constructor(baseURL) {
        super(baseURL);
    }
    getScenario(address) {
        return this.postResponse("/getScenario", {
            "address": address
        });
    }
    createScenario(address, privateKey, scenarioText, name, description, tags, executeOnlyByMe = false) {
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
    editScenario(address, privateKey, scenarioText, scenarioAddress) {
        return this.postResponse("/editScenario", {
            "address": address,
            "privateKey": privateKey,
            "scenarioText": scenarioText,
            "scenarioAddress": scenarioAddress
        });
    }
    listMyScenarios(ownerAddress) {
        return this.postResponse("/listMyScenarios", {
            "ownerAddress": ownerAddress
        });
    }
    listScenarios(skip = 0, limit = 10) {
        return this.postResponse("/listScenarios", {
            "skip": skip,
            "limit": limit
        });
    }
    executeScenario(scenarioAddress, address, privateKey, method, params = null, amount = 0, assetID = null) {
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
    callScenario(scenarioAddress, address, publicKey, method, params = [""]) {
        return this.postResponse("/callScenario", {
            "scenarioAddress": scenarioAddress,
            "address": address,
            "publicKey": publicKey,
            "method": method,
            "params": params
        });
    }
    previewScenario(scenarioText, address, privateKey, method, params = null) {
        return this.postResponse("/previewScenario", {
            "scenarioText": scenarioText,
            "address": address,
            "privateKey": privateKey,
            "method": method,
            "params": params
        });
    }
}
exports.default = Scenario;
//# sourceMappingURL=index.js.map