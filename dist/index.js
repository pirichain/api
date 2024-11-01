"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apisauce_1 = require("apisauce");
class PirichainAPI {
    constructor({ serverURL }) {
        this.client = (0, apisauce_1.create)({ baseURL: serverURL });
        return new Proxy(this, {
            get: (target, prop) => {
                if (target[prop] === undefined) {
                    try {
                        const Module = require(`./src/${prop.toLowerCase()}`).default;
                        target[prop] = new Module(this.client);
                    }
                    catch (error) {
                        throw new Error(`Module '${prop}' not found.`);
                    }
                }
                return target[prop];
            },
        });
    }
}
exports.default = PirichainAPI;
//# sourceMappingURL=index.js.map