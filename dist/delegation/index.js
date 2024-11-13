"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delegation = void 0;
const response_1 = require("../config/response");
class Delegation extends response_1.FetchResponse {
    constructor(client) {
        super(client);
    }
    async checkDeputy(address) {
        return this.postResponse("/checkDeputy", {
            "address": address
        });
    }
    async freezeCoin(delegationAddress, delegationPrivateKey, deputyAddress, amount) {
        return this.postResponse("/freezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "deputyAddress": deputyAddress,
            "amount": amount
        });
    }
    async joinAsDeputy(address, privateKey, alias = null, website = null) {
        return this.postResponse("/joinAsDeputy", {
            "address": address,
            "privateKey": privateKey,
            "alias": alias,
            "website": website
        });
    }
    async listDeputies() {
        return this.postResponse("/listDeputies");
    }
    async listMyDelegation(delegationAddress, delegationPrivateKey) {
        return this.postResponse("/listMyDelegation", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey
        });
    }
    async unFreezeCoin(delegationAddress, delegationPrivateKey, nodeAddress, txHash) {
        return this.postResponse("/unFreezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "nodeAddress": nodeAddress,
            "txHash": txHash
        });
    }
    async listDelegationTopN() {
        return this.postResponse("/listDelegationTopN");
    }
    async getMyRewardQuantity(base58, privateKey) {
        return this.postResponse("/getMyRewardQuantity", {
            "base58": base58,
            "privateKey": privateKey
        });
    }
    async claimMyRewards(address, privateKey) {
        return this.postResponse("/claimMyRewards", {
            "address": address,
            "privateKey": privateKey
        });
    }
    async verifyAddress(address) {
        return this.postResponse("/verifyAddress", {
            "address": address
        });
    }
    async getDetailsOfAddress(address) {
        return this.postResponse("/getDetailsOfAddress", {
            "address": address
        });
    }
}
exports.Delegation = Delegation;
//# sourceMappingURL=index.js.map