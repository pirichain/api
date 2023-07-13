class Delegation {
    constructor(client) {
        this.client = client
    }

    checkDeputy(address) {
        return this.client.post("/checkDeputy", {
            "address": address
        });
    }

    freezeCoin(delegationAddress, delegationPrivateKey, duptyAddress, amount) {
        return this.client.post("/freezeCoin", {
            "delegationAddress": delegationAddress,
            "delegationPrivateKey": delegationPrivateKey,
            "duptyAddress": duptyAddress,
            "amount": amount
        });
    }

    joinAsDeputy(address, privateKey, alias, website) {
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

}

module.exports = Delegation
