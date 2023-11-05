const {create} = require("apisauce");
const Wallet = require('./src/wallet');
const Token = require('./src/token');
const Transaction = require('./src/transaction');
const Block = require('./src/block');
const Data = require('./src/data');
const Utility = require('./src/utility');
const Delegation = require('./src/delegation');
const Stats = require('./src/stats');
const Scenario = require('./src/scenario');

class pirichainAPI {
    constructor({serverURL}) {
        this.client = create({baseURL: serverURL});

        this.Wallet = new Wallet(this.client);
        this.Token = new Token(this.client);
        this.Transaction = new Transaction(this.client);
        this.Block = new Block(this.client);
        this.Data = new Data(this.client);
        this.Utility = new Utility(this.client);
        this.Delegation = new Delegation(this.client);
        this.Stats = new Stats(this.client);
        this.Scenario = new Scenario(this.client);
    }
}

module.exports = pirichainAPI;
