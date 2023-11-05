import {ApisauceInstance} from "apisauce";

class Delegation {
    private client: ApisauceInstance;

    constructor(client: ApisauceInstance) {
        this.client = client;
    }

    checkDeputy(address: string) {
        return this.client.post("/checkDeputy", {
            address,
        });
    }

    freezeCoin(
        delegationAddress: string,
        delegationPrivateKey: string,
        deputyAddress: string,
        amount: number
    ) {
        return this.client.post("/freezeCoin", {
            delegationAddress,
            delegationPrivateKey,
            deputyAddress,
            amount,
        });
    }

    joinAsDeputy(
        address: string,
        privateKey: string,
        alias: string | null = null,
        website: string | null = null
    ) {
        return this.client.post("/joinAsDeputy", {
            address,
            privateKey,
            alias,
            website,
        });
    }

    listDeputies() {
        return this.client.post("/listDeputies");
    }

    listMyDelegation(delegationAddress: string, delegationPrivateKey: string) {
        return this.client.post("/listMyDelegation", {
            delegationAddress,
            delegationPrivateKey,
        });
    }

    unFreezeCoin(
        delegationAddress: string,
        delegationPrivateKey: string,
        nodeAddress: string,
        txHash: string
    ) {
        return this.client.post("/unFreezeCoin", {
            delegationAddress,
            delegationPrivateKey,
            nodeAddress,
            txHash,
        });
    }

    listDelegationTopN() {
        return this.client.post("/listDelegationTopN");
    }

    getMyRewardQuantity(base58: string, privateKey: string) {
        return this.client.post("/getMyRewardQuantity", {
            base58,
            privateKey,
        });
    }

    claimMyRewards(address: string, privateKey: string) {
        return this.client.post("/claimMyRewards", {
            address,
            privateKey,
        });
    }

    verifyAddress(address: string) {
        return this.client.post("/verifyAddress", {
            address,
        });
    }

    getDetailsOfAddress(address: string) {
        return this.client.post("/getDetailsOfAddress", {
            address,
        });
    }
}

export default Delegation;
