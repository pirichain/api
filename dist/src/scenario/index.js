"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../config/response");
class Scenario extends response_1.FetchResponse {
    constructor(client) {
        super(client);
    }
    getScenario(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getScenario", {
                "address": address
            });
        });
    }
    createScenario(address_1, privateKey_1, scenarioText_1, name_1, description_1, tags_1) {
        return __awaiter(this, arguments, void 0, function* (address, privateKey, scenarioText, name, description, tags, executeOnlyByMe = false) {
            return yield this.postResponse("/createScenario", {
                "address": address,
                "privateKey": privateKey,
                "scenarioText": scenarioText,
                "name": name,
                "description": description,
                "tags": tags,
                "executeOnlyByMe": executeOnlyByMe
            });
        });
    }
    editScenario(address, privateKey, scenarioText, scenarioAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/editScenario", {
                "address": address,
                "privateKey": privateKey,
                "scenarioText": scenarioText,
                "scenarioAddress": scenarioAddress
            });
        });
    }
    listMyScenarios(ownerAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/listMyScenarios", {
                "ownerAddress": ownerAddress
            });
        });
    }
    listScenarios() {
        return __awaiter(this, arguments, void 0, function* (skip = 0, limit = 10) {
            return yield this.postResponse("/listScenarios", {
                "skip": skip,
                "limit": limit
            });
        });
    }
    executeScenario(scenarioAddress_1, address_1, privateKey_1, method_1) {
        return __awaiter(this, arguments, void 0, function* (scenarioAddress, address, privateKey, method, params = null, amount = 0, assetID = null) {
            return yield this.postResponse("/executeScenario", {
                "scenarioAddress": scenarioAddress,
                "address": address,
                "privateKey": privateKey,
                "method": method,
                "params": params,
                "amount": amount,
                "assetID": assetID
            });
        });
    }
    callScenario(scenarioAddress_1, address_1, publicKey_1, method_1) {
        return __awaiter(this, arguments, void 0, function* (scenarioAddress, address, publicKey, method, params = [""]) {
            return yield this.postResponse("/callScenario", {
                "scenarioAddress": scenarioAddress,
                "address": address,
                "publicKey": publicKey,
                "method": method,
                "params": params
            });
        });
    }
    previewScenario(scenarioText_1, address_1, privateKey_1, method_1) {
        return __awaiter(this, arguments, void 0, function* (scenarioText, address, privateKey, method, params = null) {
            return yield this.postResponse("/previewScenario", {
                "scenarioText": scenarioText,
                "address": address,
                "privateKey": privateKey,
                "method": method,
                "params": params
            });
        });
    }
}
exports.default = Scenario;
//# sourceMappingURL=index.js.map