import axios, {AxiosInstance} from "axios";
import Wallet from "./wallet";
import Token from "./token";
import Transaction from "./transaction";
import Block from "./block";
import Data from "./data";
import Utility from "./utility";
import Delegation from "./delegation";
import Stats from "./stats";
import Scenario from "./scenario";


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

class PirichainAPI implements IPirichainAPI {
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
        const client: AxiosInstance = axios.create({baseURL: serverURL});

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

export {PirichainAPI}
export default PirichainAPI;
