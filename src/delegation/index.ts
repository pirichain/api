import {ApisauceInstance} from 'apisauce';
import {FetchResponse} from "../../config/response";

class Delegation extends FetchResponse {

    constructor(client: ApisauceInstance) {
        super(client)
    }

    async checkDeputy(address: string): Promise<any> {
        return await this.postResponse("/checkDeputy", {
            "address": address
        });
    }

    async freezeCoin(delegationAddress: string, delegationPrivateKey: string, deputyAddress: string, amount: number): Promise<any> {
        return await this.postResponse("/freezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "deputyAddress": deputyAddress,
            "amount": amount
        });
    }

    async joinAsDeputy(address: string, privateKey: string, alias: string | null = null, website: string | null = null): Promise<any> {
        return await this.postResponse("/joinAsDeputy", {
            "address": address,
            "privateKey": privateKey,
            "alias": alias,
            "website": website
        });
    }

    async listDeputies(): Promise<any> {
        return await this.postResponse("/listDeputies");
    }

    async listMyDelegation(delegationAddress: string, delegationPrivateKey: string): Promise<any> {
        return await this.postResponse("/listMyDelegation", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey
        });
    }

    async unFreezeCoin(delegationAddress: string, delegationPrivateKey: string, nodeAddress: string, txHash: string): Promise<any> {
        return await this.postResponse("/unFreezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "nodeAddress": nodeAddress,
            "txHash": txHash
        });
    }

    async listDelegationTopN(): Promise<any> {
        return await this.postResponse("/listDelegationTopN");
    }

    async getMyRewardQuantity(base58: string, privateKey: string): Promise<any> {
        return await this.postResponse("/getMyRewardQuantity", {
            "base58": base58,
            "privateKey": privateKey
        });
    }

    async claimMyRewards(address: string, privateKey: string): Promise<any> {
        return await this.postResponse("/claimMyRewards", {
            "address": address,
            "privateKey": privateKey
        });
    }

    async verifyAddress(address: string): Promise<any> {
        return await this.postResponse("/verifyAddress", {
            "address": address
        });
    }

    async getDetailsOfAddress(address: string): Promise<any> {
        return await this.postResponse("/getDetailsOfAddress", {
            "address": address
        });
    }
}

export default Delegation;
