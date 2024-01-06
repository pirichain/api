class Delegation {
    client;
    constructor(client) {
        this.client = client
    }
    checkDeputy(address) {
        return this.client.post("/checkDeputy", {
            "address": address
        });
    }
    freezeCoin(delegationAddress, delegationPrivateKey, deputyAddress, amount) {
        return this.client.post("/freezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "duptyAddress": deputyAddress,
            "amount": amount
        });
    }
    joinAsDeputy(address, privateKey, alias = null, website = null) {
        return this.client.post("/joinAsDeputy", {
            "address": address,
            "privateKey": privateKey,
            "alias": alias,
            "website": website
        });
    }
    listDeputies() {
        return this.client.post("/listDeputies");
    }
    listMyDelegation(delegationAddress, delegationPrivateKey) {
        return this.client.post("/listMyDelegation", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
        });
    }
    unFreezeCoin(delegationAddress, delegationPrivateKey, nodeAddress, txHash) {
        return this.client.post("/unFreezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "nodeAddress": nodeAddress,
            "txHash": txHash
        });
    }
    listDelegationTopN() {
        return this.client.post("/listDelegationTopN");
    }
    getMyRewardQuantity(base58, privateKey) {
        return this.client.post("/getMyRewardQuantity", {
            "base58": base58,
            "privateKey": privateKey
        });
    }
    claimMyRewards(address, privateKey) {
        return this.client.post("/claimMyRewards", {
            "address": address,
            "privateKey": privateKey
        });
    }
    verifyAddress(address){
        return this.client.post("/verifyAddress", {
            'address': address
        });
    }
    getDetailsOfAddress(address) {
        return this.client.post("/getDetailsOfAddress", {
            "address": address
        });
    }
}

module.exports = Delegation
