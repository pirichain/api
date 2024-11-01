import {ApisauceInstance, create} from "apisauce";
import Wallet from "./src/wallet";
import Token from "./src/token";
import Transaction from "./src/transaction";
import Block from "./src/block";
import Data from "./src/data";
import Utility from "./src/utility";
import Delegation from "./src/delegation";
import Stats from "./src/stats";
import Scenario from "./src/scenario";

class PirichainAPI {
    Wallet: Wallet;
    Token: Token;
    Transaction: Transaction;
    Block: Block;
    Data: Data;
    Utility: Utility;
    Delegation: Delegation;
    Stats: Stats;
    Scenario: Scenario;
    constructor({serverURL}: { serverURL: string }) {
        const client = create({baseURL: serverURL});

        this.Wallet = new Wallet(client);
        this.Token = new Token(client);
        this.Transaction = new Transaction(client);
        this.Block = new Block(client);
        this.Data = new Data(client);
        this.Utility = new Utility(client);
        this.Delegation = new Delegation(client);
        this.Stats = new Stats(client);
        this.Scenario = new Scenario(client);
    }
}

export default PirichainAPI;
