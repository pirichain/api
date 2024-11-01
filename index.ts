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
    client: ApisauceInstance;
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

export default PirichainAPI;
