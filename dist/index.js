"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PirichainAPI = void 0;
const wallet_1 = __importDefault(require("./src/wallet"));
const token_1 = __importDefault(require("./src/token"));
const transaction_1 = __importDefault(require("./src/transaction"));
const block_1 = __importDefault(require("./src/block"));
const data_1 = __importDefault(require("./src/data"));
const utility_1 = __importDefault(require("./src/utility"));
const delegation_1 = __importDefault(require("./src/delegation"));
const stats_1 = __importDefault(require("./src/stats"));
const scenario_1 = __importDefault(require("./src/scenario"));
class PirichainAPI {
    constructor({ serverURL }) {
        this.Wallet = new wallet_1.default(serverURL);
        this.Token = new token_1.default(serverURL);
        this.Transaction = new transaction_1.default(serverURL);
        this.Block = new block_1.default(serverURL);
        this.Data = new data_1.default(serverURL);
        this.Utility = new utility_1.default(serverURL);
        this.Delegation = new delegation_1.default(serverURL);
        this.Stats = new stats_1.default(serverURL);
        this.Scenario = new scenario_1.default(serverURL);
    }
}
exports.PirichainAPI = PirichainAPI;
exports.default = PirichainAPI;
module.exports = { PirichainAPI };
//# sourceMappingURL=index.js.map