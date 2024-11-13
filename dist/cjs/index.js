"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PirichainAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const wallet_1 = require("./wallet");
const token_1 = require("./token");
const transaction_1 = require("./transaction");
const block_1 = require("./block");
const data_1 = require("./data");
const utility_1 = require("./utility");
const delegation_1 = require("./delegation");
const stats_1 = require("./stats");
const scenario_1 = require("./scenario");
class PirichainAPI {
    constructor({ serverURL }) {
        const client = axios_1.default.create({ baseURL: serverURL });
        this.Wallet = new wallet_1.Wallet(client);
        this.Token = new token_1.Token(client);
        this.Transaction = new transaction_1.Transaction(client);
        this.Block = new block_1.Block(client);
        this.Data = new data_1.Data(client);
        this.Utility = new utility_1.Utility(client);
        this.Delegation = new delegation_1.Delegation(client);
        this.Stats = new stats_1.Stats(client);
        this.Scenario = new scenario_1.Scenario(client);
    }
}
exports.PirichainAPI = PirichainAPI;
//# sourceMappingURL=index.js.map