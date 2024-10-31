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
const response_1 = require("../../config/response");
class Delegation extends response_1.FetchResponse {
    constructor(client) {
        super(client);
    }
    checkDeputy(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/checkDeputy", {
                "address": address
            });
        });
    }
    freezeCoin(delegationAddress, delegationPrivateKey, deputyAddress, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/freezeCoin", {
                "delegationAddress": delegationAddress,
                "delegationPrivateKey": delegationPrivateKey,
                "deputyAddress": deputyAddress,
                "amount": amount
            });
        });
    }
    joinAsDeputy(address_1, privateKey_1) {
        return __awaiter(this, arguments, void 0, function* (address, privateKey, alias = null, website = null) {
            return yield this.postResponse("/joinAsDeputy", {
                "address": address,
                "privateKey": privateKey,
                "alias": alias,
                "website": website
            });
        });
    }
    listDeputies() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/listDeputies");
        });
    }
    listMyDelegation(delegationAddress, delegationPrivateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/listMyDelegation", {
                "delegationAddress": delegationAddress,
                "delegationPrivateKey": delegationPrivateKey
            });
        });
    }
    unFreezeCoin(delegationAddress, delegationPrivateKey, nodeAddress, txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/unFreezeCoin", {
                "delegationAddress": delegationAddress,
                "delegationPrivateKey": delegationPrivateKey,
                "nodeAddress": nodeAddress,
                "txHash": txHash
            });
        });
    }
    listDelegationTopN() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/listDelegationTopN");
        });
    }
    getMyRewardQuantity(base58, privateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getMyRewardQuantity", {
                "base58": base58,
                "privateKey": privateKey
            });
        });
    }
    claimMyRewards(address, privateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/claimMyRewards", {
                "address": address,
                "privateKey": privateKey
            });
        });
    }
    verifyAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/verifyAddress", {
                "address": address
            });
        });
    }
    getDetailsOfAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getDetailsOfAddress", {
                "address": address
            });
        });
    }
}
exports.default = Delegation;
//# sourceMappingURL=index.js.map