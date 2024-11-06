import { FetchResponse } from "../config/response";
import { AxiosInstance } from "axios";
interface IDelegation {
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
declare class Delegation extends FetchResponse implements IDelegation {
    constructor(client: AxiosInstance);
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
export default Delegation;
export { IDelegation };
