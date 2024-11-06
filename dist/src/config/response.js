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
exports.FetchResponse = void 0;
class FetchResponse {
    constructor(client) {
        this.client = client;
    }
    getResponse(endpoint, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.client.get(endpoint, config);
                if (result.status === 200)
                    return result.data;
                return { error: 1, message: result.data };
            }
            catch (error) {
                return { error: 1, message: error.message };
            }
        });
    }
    postResponse(endpoint, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.client.post(endpoint, data, config);
                if (result.status === 200)
                    return result.data;
                return { error: 1, type: { status: result.status, statusText: result.statusText }, message: result.data };
            }
            catch (error) {
                return { error: 1, type: { status: 0, statusText: "exception" }, message: error.message };
            }
        });
    }
}
exports.FetchResponse = FetchResponse;
//# sourceMappingURL=response.js.map