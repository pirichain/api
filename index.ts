import axios, {AxiosInstance} from "axios";
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
    public readonly Wallet: Wallet;
    public readonly Token: Token;
    public readonly Transaction: Transaction;
    public readonly Block: Block;
    public readonly Data: Data;
    public readonly Utility: Utility;
    public readonly Delegation: Delegation;
    public readonly Stats: Stats;
    public readonly Scenario: Scenario;

    constructor({ serverURL }: { serverURL: string }) {
        const client: AxiosInstance = axios.create({ baseURL: serverURL });

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
