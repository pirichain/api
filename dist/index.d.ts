import { IBlock } from "./src/block";
import { IData } from "./src/data";
import { IDelegation } from "./src/delegation";
import { IScenario } from "./src/scenario";
import { IStats } from "./src/stats";
import { IToken } from "./src/token";
import { ITransaction } from "./src/transaction";
import { IUtility } from "./src/utility";
import { IWallet } from "./src/wallet";
declare class PirichainAPI {
    private readonly client;
    constructor({ serverURL }: {
        serverURL: string;
    });
    Wallet?: IWallet;
    Token?: IToken;
    Transaction?: ITransaction;
    Block?: IBlock;
    Data?: IData;
    Utility?: IUtility;
    Delegation?: IDelegation;
    Stats?: IStats;
    Scenario?: IScenario;
}
export default PirichainAPI;
