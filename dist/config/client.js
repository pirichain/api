"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = client;
const axios_1 = __importDefault(require("axios"));
function client(URL, ...rest) {
    const config = Object.assign({}, { baseURL: URL }, rest);
    return axios_1.default.create(config);
}
//# sourceMappingURL=client.js.map