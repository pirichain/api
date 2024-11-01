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
    getResponse(endpoint, params, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.client.get(endpoint, params, config);
                if (result.ok) {
                    return result.data;
                }
                return { error: 1, message: result.problem };
            }
            catch (e) {
                return { error: 1, message: e };
            }
        });
    }
    postResponse(endpoint, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.client.post(endpoint, data, config);
                if (result.ok) {
                    return result.data;
                }
                return { error: 1, message: result.problem };
            }
            catch (e) {
                return { error: 1, message: e };
            }
        });
    }
}
exports.FetchResponse = FetchResponse;
//# sourceMappingURL=response.js.map