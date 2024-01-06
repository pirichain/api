const {sendRawTransaction} = require("./sendRawTransaction");

class Token {
    constructor(client) {
        this.client = client
    }

    createToken(creatorAddress,
                privateKey,
                tokenName,
                tokenSymbol,
                totalSupply,
                logo,
                decimals,
                description,
                webSite,
                socialMediaFacebookURL = "",
                socialMediaTwitterURL = "",
                socialMediaMediumURL = "",
                socialMediaYoutubeURL = "",
                socialMediaRedditURL = "",
                socialMediaBitcoinTalkURL = "",
                socialMediaInstagramURL = "",
                mailAddress = "",
                companyAddress = "",
                sector = "",
                hasAirdrop = false,
                hasStake = false) {
        const form = new FormData();
        form.append('creatorAddress', creatorAddress);
        form.append('privateKey', privateKey);
        form.append('tokenName', tokenName);
        form.append('tokenSymbol', tokenSymbol);
        form.append('totalSupply', totalSupply);
        form.append('logo', logo);
        form.append('decimals', decimals);
        form.append('description', description);
        form.append('webSite', webSite);
        form.append('socialMediaFacebookURL', socialMediaFacebookURL);
        form.append('socialMediaTwitterURL', socialMediaTwitterURL);
        form.append('socialMediaMediumURL', socialMediaMediumURL);
        form.append('socialMediaYoutubeURL', socialMediaYoutubeURL);
        form.append('socialMediaRedditURL', socialMediaRedditURL);
        form.append('socialMediaBitcoinTalkURL', socialMediaBitcoinTalkURL);
        form.append('socialMediaInstagramURL', socialMediaInstagramURL);
        form.append('mailAddress', mailAddress);
        form.append('companyAddress', companyAddress);
        form.append('sector', sector);
        form.append('hasAirdrop', hasAirdrop);
        form.append('hasStake', hasStake);

        return this.client.post("/createToken", form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    getToken(assetID) {
        return this.client.post("/getToken", {
            "assetID": assetID
        })
    }

    listTokens(skip, limit) {
        return this.client.post("/listTokens", {
            "skip": skip,
            "limit": limit
        })
    }

    sendToken(address, privateKey, to, amount, assetID) {
        return this.client.post("/sendToken", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "amount": amount,
            "assetID": assetID
        })
    }

    sendRawTransaction(address, privateKey, to, amount, assetID = -1, estimatedFee = 0.1) {
        return sendRawTransaction(this.client, address, privateKey, to, amount, assetID, estimatedFee)
    }

    givemePiri(address) {
        return this.client.post("/givemePiri", {
            "address": address
        });
    }

    getEstimatedFee() {
        return this.client.post("/getEstimatedFee")
    }
}


module.exports = Token;
