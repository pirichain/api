class Scenario {
    client;
    constructor(client) {
        this.client = client
    }

    getScenario(address) {
        return this.client.post("/getScenario", {
            "address": address
        });
    }

    createScenario(address, privateKey, scenarioText, name, description, tags, executeOnlyByMe = false) {
        return this.client.post("/createScenario", {
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
        return this.client.post("/editScenario", {
            "address": address,
            "privateKey": privateKey,
            "scenarioText": scenarioText,
            "scenarioAddress": scenarioAddress
        });
    }

    listMyScenarios(ownerAddress) {
        return this.client.post("/listMyScenarios", {
            "ownerAddress": ownerAddress
        });
    }

    listScenarios(skip = 0, limit = 10) {
        return this.client.post("/listScenarios", {
            "skip": skip,
            "limit": limit
        });
    }

    executeScenario(scenarioAddress, address, privateKey, method, params = null, amount = 0, assetID = null) {
        return this.client.post("/executeScenario", {
            "scenarioAddress": scenarioAddress,
            "address": address,
            "privateKey": privateKey,
            "method": method,
            "params": params,
            "amount": amount,
            "assetID": assetID
        });
    }

    previewScenario(scenarioText, address, privateKey, method, params = null) {
        return this.client.post("/previewScenario", {
            "scenarioText": scenarioText,
            "address": address,
            "privateKey": privateKey,
            "method": method,
            "params": params
        });
    }

}

module.exports = Scenario
