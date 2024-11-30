import { FetchResponse } from "../config/response";
export default class Delegation extends FetchResponse {
    constructor(baseURL: string);
    checkDeputy(address: string): Promise<any>;
    freezeCoin(delegationAddress: string, delegationPrivateKey: string, deputyAddress: string, amount: number): Promise<any>;
    joinAsDeputy(address: string, privateKey: string, alias?: string | null, website?: string | null): Promise<any>;
    listDeputies(): Promise<any>;
    listMyDelegation(delegationAddress: string, delegationPrivateKey: string): Promise<any>;
    unFreezeCoin(delegationAddress: string, delegationPrivateKey: string, nodeAddress: string, txHash: string): Promise<any>;
    listDelegationTopN(): Promise<any>;
    getMyRewardQuantity(base58: string, privateKey: string): Promise<any>;
    claimMyRewards(address: string, privateKey: string): Promise<any>;
    verifyAddress(address: string): Promise<any>;
    getDetailsOfAddress(address: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map