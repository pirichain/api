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
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    getResponse(endpoint, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseURL}${endpoint}`, Object.assign({ method: "GET" }, config));
                if (response.ok) {
                    return yield response.json();
                }
                return { error: 1, message: yield response.text() };
            }
            catch (error) {
                return { error: 1, message: error.message };
            }
        });
    }
    postResponse(endpoint, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _config = Object.assign({ method: "POST", body: data ? JSON.stringify(data) : "", headers: (config === null || config === void 0 ? void 0 : config.headers) || {
                        "Content-Type": "application/json"
                    } }, config);
                const response = yield fetch(`${this.baseURL}${endpoint}`, _config);
                if (response.ok) {
                    return yield response.json();
                }
                return {
                    error: 1,
                    type: { status: response.status, statusText: response.statusText },
                    message: yield response.text(),
                };
            }
            catch (error) {
                return {
                    error: 1,
                    type: { status: 0, statusText: "exception" },
                    message: error.message,
                };
            }
        });
    }
}
exports.FetchResponse = FetchResponse;
//# sourceMappingURL=response.js.map