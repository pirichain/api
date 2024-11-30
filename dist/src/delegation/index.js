"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../config/response");
class Delegation extends response_1.FetchResponse {
    constructor(baseURL) {
        super(baseURL);
    }
    checkDeputy(address) {
        return this.postResponse("/checkDeputy", {
            "address": address
        });
    }
    freezeCoin(delegationAddress, delegationPrivateKey, deputyAddress, amount) {
        return this.postResponse("/freezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "deputyAddress": deputyAddress,
            "amount": amount
        });
    }
    joinAsDeputy(address, privateKey, alias = null, website = null) {
        return this.postResponse("/joinAsDeputy", {
            "address": address,
            "privateKey": privateKey,
            "alias": alias,
            "website": website
        });
    }
    listDeputies() {
        return this.postResponse("/listDeputies");
    }
    listMyDelegation(delegationAddress, delegationPrivateKey) {
        return this.postResponse("/listMyDelegation", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey
        });
    }
    unFreezeCoin(delegationAddress, delegationPrivateKey, nodeAddress, txHash) {
        return this.postResponse("/unFreezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "nodeAddress": nodeAddress,
            "txHash": txHash
        });
    }
    listDelegationTopN() {
        return this.postResponse("/listDelegationTopN");
    }
    getMyRewardQuantity(base58, privateKey) {
        return this.postResponse("/getMyRewardQuantity", {
            "base58": base58,
            "privateKey": privateKey
        });
    }
    claimMyRewards(address, privateKey) {
        return this.postResponse("/claimMyRewards", {
            "address": address,
            "privateKey": privateKey
        });
    }
    verifyAddress(address) {
        return this.postResponse("/verifyAddress", {
            "address": address
        });
    }
    getDetailsOfAddress(address) {
        return this.postResponse("/getDetailsOfAddress", {
            "address": address
        });
    }
}
exports.default = Delegation;
//# sourceMappingURL=index.js.map