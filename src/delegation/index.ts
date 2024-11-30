import {FetchResponse} from "../config/response";

export default class Delegation extends FetchResponse {

    constructor(baseURL: string) {
        super(baseURL);
    }

    checkDeputy(address: string): Promise<any> {
        return this.postResponse("/checkDeputy", {
            "address": address
        });
    }

    freezeCoin(delegationAddress: string, delegationPrivateKey: string, deputyAddress: string, amount: number): Promise<any> {
        return this.postResponse("/freezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "deputyAddress": deputyAddress,
            "amount": amount
        });
    }

    joinAsDeputy(address: string, privateKey: string, alias: string | null = null, website: string | null = null): Promise<any> {
        return this.postResponse("/joinAsDeputy", {
            "address": address,
            "privateKey": privateKey,
            "alias": alias,
            "website": website
        });
    }

    listDeputies(): Promise<any> {
        return this.postResponse("/listDeputies");
    }

    listMyDelegation(delegationAddress: string, delegationPrivateKey: string): Promise<any> {
        return this.postResponse("/listMyDelegation", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey
        });
    }

    unFreezeCoin(delegationAddress: string, delegationPrivateKey: string, nodeAddress: string, txHash: string): Promise<any> {
        return this.postResponse("/unFreezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "nodeAddress": nodeAddress,
            "txHash": txHash
        });
    }

    listDelegationTopN(): Promise<any> {
        return this.postResponse("/listDelegationTopN");
    }

    getMyRewardQuantity(base58: string, privateKey: string): Promise<any> {
        return this.postResponse("/getMyRewardQuantity", {
            "base58": base58,
            "privateKey": privateKey
        });
    }

    claimMyRewards(address: string, privateKey: string): Promise<any> {
        return this.postResponse("/claimMyRewards", {
            "address": address,
            "privateKey": privateKey
        });
    }

    verifyAddress(address: string): Promise<any> {
        return this.postResponse("/verifyAddress", {
            "address": address
        });
    }

    getDetailsOfAddress(address: string): Promise<any> {
        return this.postResponse("/getDetailsOfAddress", {
            "address": address
        });
    }
}
