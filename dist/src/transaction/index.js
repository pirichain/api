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
class Transaction extends response_1.FetchResponse {
    constructor(client) {
        super(client);
    }
    getTransaction(tx) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getTransaction", {
                "tx": tx
            });
        });
    }
    listPoolTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/listPoolTransactions");
        });
    }
    listTransactions() {
        return __awaiter(this, arguments, void 0, function* (skip = 0, limit = 50) {
            return yield this.postResponse("/listTransactions", {
                "skip": skip,
                "limit": limit
            });
        });
    }
    listTransactionsByAddr(skip, limit, address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/listTransactionsByAddr", {
                "skip": skip,
                "limit": limit || 50,
                "address": address
            });
        });
    }
    listTransactionsByAssetID(skip_1, limit_1, assetID_1) {
        return __awaiter(this, arguments, void 0, function* (skip, limit, assetID, desc = false) {
            return yield this.postResponse("/listTransactionsByAssetID", {
                "skip": skip,
                "limit": limit,
                "assetID": assetID,
                "desc": desc.toString()
            });
        });
    }
    getPoolTransaction(tx) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getPoolTransaction", {
                "tx": tx
            });
        });
    }
}
exports.default = Transaction;
//# sourceMappingURL=index.js.map