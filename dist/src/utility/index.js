"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidAddress_1 = require("./isValidAddress");
const response_1 = require("../config/response");
class Utility extends response_1.FetchResponse {
    constructor(baseURL) {
        super(baseURL);
        this.isValidAddress = (address) => (0, isValidAddress_1.isValidAddress)(address);
    }
    search(value) {
        return this.postResponse('/search', {
            value: value
        });
    }
}
exports.default = Utility;
//# sourceMappingURL=index.js.map