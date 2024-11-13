"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const isValidAddress_1 = require("./isValidAddress");
const response_1 = require("../config/response");
class Utility extends response_1.FetchResponse {
    constructor(client) {
        super(client);
        this.isValidAddress = (address) => (0, isValidAddress_1.isValidAddress)(address);
    }
    async search(value) {
        return this.postResponse('/search', {
            value: value
        });
    }
}
exports.Utility = Utility;
//# sourceMappingURL=index.js.map