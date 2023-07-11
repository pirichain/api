class pirichainAPI {
    Wallet = {};
    Token = {};
    Transaction = {};
    Block = {};
    Data = {};
    Utility = {};
    Delegation = {};
    BuyPiri = {};
    Stats = {};
    Scenario = {};


    constructor({
                    isMainNet = true,
                    testNetServer = 'https://testnet.pirichain.com',
                    mainNetServer = 'https://core.pirichain.com'
                }) {
        global.piriChainNetworkIsMainNet = isMainNet;
        global.piriChainTestNetServer = testNetServer;
        global.piriChainMainNetServer = mainNetServer

        this.Wallet = require('./src/wallet');
        this.Token = require('./src/token');
        this.Transaction = require('./src/transaction');
        this.Block = require('./src/block');
        this.Data = require('./src/data');
        this.Utility = require('./src/utility');
        this.Delegation = require('./src/delegation');
        this.BuyPiri = require('./src/buypiri');
        this.Stats = require('./src/stats');
        this.Scenario = require('./src/scenario');
    }


}

module.exports = pirichainAPI;
