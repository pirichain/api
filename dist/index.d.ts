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
declare class PirichainAPI implements IPirichainAPI {
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
export { PirichainAPI };
export default PirichainAPI;
