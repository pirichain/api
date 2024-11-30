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
export declare class PirichainAPI implements IPirichainAPI {
    readonly Wallet: Wallet;
    readonly Token: Token;
    readonly Transaction: Transaction;
    readonly Block: Block;
    readonly Data: Data;
    readonly Utility: Utility;
    readonly Delegation: Delegation;
    readonly Stats: Stats;
    readonly Scenario: Scenario;
    constructor({ serverURL }: {
        serverURL: string;
    });
}
export default PirichainAPI;
//# sourceMappingURL=index.d.ts.map