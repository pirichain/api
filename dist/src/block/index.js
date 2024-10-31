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
class Block extends response_1.FetchResponse {
    constructor(client) {
        super(client);
    }
    getBlock(blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postResponse("/getBlock", {
                "blockNumber": blockNumber
            });
        });
    }
    getBlocks() {
        return __awaiter(this, arguments, void 0, function* (skip = 0, limit = 10) {
            return yield this.postResponse("/getBlocks", {
                "skip": skip,
                "limit": limit
            });
        });
    }
    getLastBlocksWithBlockHeight() {
        return __awaiter(this, arguments, void 0, function* (limit = 10, blockHeight = 0) {
            return yield this.postResponse("/getLastBlocksWithBlockHeight", {
                "limit": limit,
                "blockHeight": blockHeight
            });
        });
    }
    getBlocksWithTransactionCount() {
        return __awaiter(this, arguments, void 0, function* (skip = 0, limit = 10) {
            return yield this.postResponse("/getBlocksWithTransactionCount", {
                "skip": skip,
                "limit": limit
            });
        });
    }
    getBlocksDesc() {
        return __awaiter(this, arguments, void 0, function* (skip = 0, limit = 10) {
            return yield this.postResponse("/getBlocksDesc", {
                "skip": skip,
                "limit": limit
            });
        });
    }
    getOnlyBlocks() {
        return __awaiter(this, arguments, void 0, function* (skip = 0, limit = 10) {
            return yield this.postResponse("/getOnlyBlocks", {
                "skip": skip,
                "limit": limit
            });
        });
    }
    getLastBlocks() {
        return __awaiter(this, arguments, void 0, function* (limit = 10) {
            return yield this.postResponse("/getLastBlocks", {
                "limit": limit
            });
        });
    }
}
exports.default = Block;
//# sourceMappingURL=index.js.map