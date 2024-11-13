import axios from "axios";
import Wallet from "./wallet";
import Token from "./token";
import Transaction from "./transaction";
import Block from "./block";
import Data from "./data";
import Utility from "./utility";
import Delegation from "./delegation";
import Stats from "./stats";
import Scenario from "./scenario";
class PirichainAPI {
    Wallet;
    Token;
    Transaction;
    Block;
    Data;
    Utility;
    Delegation;
    Stats;
    Scenario;
    constructor({ serverURL }) {
        const client = axios.create({ baseURL: serverURL });
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
export { PirichainAPI };
export default PirichainAPI;
