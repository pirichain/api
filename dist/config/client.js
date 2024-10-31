"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = client;
const apisauce_1 = require("apisauce");
function client(URL, ...rest) {
    const config = Object.assign({}, { baseURL: URL }, rest);
    return (0, apisauce_1.create)(config);
}
//# sourceMappingURL=client.js.map