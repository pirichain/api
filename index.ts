import Wallet from "./src/wallet";
import Token from "./src/token";
import Transaction from "./src/transaction";
import Block from "./src/block";
import Data from "./src/data";
import Utility from "./src/utility";
import Delegation from "./src/delegation";
import Stats from "./src/stats";
import Scenario from "./src/scenario";


interface IPirichainAPI {
    Wallet: Wallet;
    Token: Token;
    Transaction: Transaction;
    Block: Block;
    Data: Data;
    Utility: Utility;
    Delegation: Delegation;
    Stats: Stats;
    Scenario: Scenario;
}

export class PirichainAPI implements IPirichainAPI {
    public readonly Wallet: Wallet;
    public readonly Token: Token;
    public readonly Transaction: Transaction;
    public readonly Block: Block;
    public readonly Data: Data;
    public readonly Utility: Utility;
    public readonly Delegation: Delegation;
    public readonly Stats: Stats;
    public readonly Scenario: Scenario;

    constructor({serverURL}: { serverURL: string }) {
        this.Wallet = new Wallet(serverURL);
        this.Token = new Token(serverURL);
        this.Transaction = new Transaction(serverURL);
        this.Block = new Block(serverURL);
        this.Data = new Data(serverURL);
        this.Utility = new Utility(serverURL);
        this.Delegation = new Delegation(serverURL);
        this.Stats = new Stats(serverURL);
        this.Scenario = new Scenario(serverURL);
    }
}
export default PirichainAPI;
module.exports = {PirichainAPI}
