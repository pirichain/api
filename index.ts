import { ApisauceInstance, create } from "apisauce";
import Wallet, {IWallet} from "./src/wallet";
import Token, {IToken} from "./src/token";
import Transaction, {ITransaction} from "./src/transaction";
import Block, {IBlock} from "./src/block";
import Data, {IData} from "./src/data";
import Utility, {IUtility} from "./src/utility";
import Delegation, {IDelegation} from "./src/delegation";
import Stats, {IStats} from "./src/stats";
import Scenario, {IScenario} from "./src/scenario";

class PirichainAPI {
    public readonly Wallet: IWallet;
    public readonly Token: IToken;
    public readonly Transaction: ITransaction;
    public readonly Block: IBlock;
    public readonly Data: IData;
    public readonly Utility: IUtility;
    public readonly Delegation: IDelegation;
    public readonly Stats: IStats;
    public readonly Scenario: IScenario;

    constructor({ serverURL }: { serverURL: string }) {
        const client: ApisauceInstance = create({ baseURL: serverURL });

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
