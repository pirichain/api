class Scenario {
    constructor(client) {
        this.client = client
    }

    getScenario(address) {
        return this.client.post("/getScenario", {
            "address": address
        });
    }

    createScenario(address, privateKey, scenarioText, name, description, tags) {
        return this.client.post("/createScenario", {
            "address": address,
            "privateKey": privateKey,
            "scenarioText": scenarioText,
            "name": name,
            "description": description,
            "tags": tags

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

    listScenarios(skip, limit) {
        return this.client.post("/listScenarios", {
            "skip": skip,
            "limit": limit
        });
    }

    executeScenario(scenarioAddress, address, privateKey, method, params) {
        return this.client.post("/executeScenario", {
            "scenarioAddress": scenarioAddress,
            "address": address,
            "privateKey": privateKey,
            "method": method,
            "params": params
        });
    }

    previewScenario(scenarioText, address, privateKey, method, params) {
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
