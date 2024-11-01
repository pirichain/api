import {ApisauceInstance, create} from "apisauce";
import {IBlock} from "./src/block";
import {IData} from "./src/data";
import {IDelegation} from "./src/delegation";
import {IScenario} from "./src/scenario";
import {IStats} from "./src/stats";
import {IToken} from "./src/token";
import {ITransaction} from "./src/transaction";
import {IUtility} from "./src/utility";
import {IWallet} from "./src/wallet";

class PirichainAPI {
    private readonly client: ApisauceInstance;

    constructor({serverURL}: { serverURL: string }) {
        this.client = create({baseURL: serverURL});
        return new Proxy(this, {
            get: (target, prop: string) => {
                if (target[prop as keyof PirichainAPI] === undefined) {
                    try {
                        const Module = require(`./src/${prop.toLowerCase()}`).default;
                        target[prop as keyof PirichainAPI] = new Module(this.client);
                    } catch (error) {
                        throw new Error(`Module '${prop}' not found.`);
                    }
                }
                return target[prop as keyof PirichainAPI];
            },
        });
    }

    public Wallet?: IWallet;
    public Token?: IToken;
    public Transaction?: ITransaction;
    public Block?: IBlock;
    public Data?: IData;
    public Utility?: IUtility;
    public Delegation?: IDelegation;
    public Stats?: IStats;
    public Scenario?: IScenario;
}

export default PirichainAPI;
