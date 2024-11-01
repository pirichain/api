import { IWallet } from "./src/wallet";
import { IToken } from "./src/token";
import { ITransaction } from "./src/transaction";
import { IBlock } from "./src/block";
import { IData } from "./src/data";
import { IUtility } from "./src/utility";
import { IDelegation } from "./src/delegation";
import { IStats } from "./src/stats";
import { IScenario } from "./src/scenario";
declare class PirichainAPI {
    readonly Wallet: IWallet;
    readonly Token: IToken;
    readonly Transaction: ITransaction;
    readonly Block: IBlock;
    readonly Data: IData;
    readonly Utility: IUtility;
    readonly Delegation: IDelegation;
    readonly Stats: IStats;
    readonly Scenario: IScenario;
    constructor({ serverURL }: {
        serverURL: string;
    });
}
export default PirichainAPI;
