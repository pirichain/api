import FormData from 'form-data';
import { sendRawTransaction } from './sendRawTransaction';
import { FetchResponse } from "../config/response";
export default class Token extends FetchResponse {
    constructor(client) {
        super(client);
    }
    async createToken(creatorAddress, privateKey, tokenName, tokenSymbol, totalSupply, logo, decimals, description, webSite, socialMediaFacebookURL = "", socialMediaTwitterURL = "", socialMediaMediumURL = "", socialMediaYoutubeURL = "", socialMediaRedditURL = "", socialMediaBitcoinTalkURL = "", socialMediaInstagramURL = "", mailAddress = "", companyAddress = "", sector = "", hasAirdrop = false, hasStake = false) {
        const form = new FormData();
        form.append('creatorAddress', creatorAddress);
        form.append('privateKey', privateKey);
        form.append('tokenName', tokenName);
        form.append('tokenSymbol', tokenSymbol);
        form.append('totalSupply', totalSupply);
        form.append('logo', logo);
        form.append('decimals', decimals.toString());
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
        form.append('hasAirdrop', hasAirdrop.toString());
        form.append('hasStake', hasStake.toString());
        return this.postResponse("/createToken", form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    async getToken(assetID) {
        return this.postResponse("/getToken", {
            "assetID": assetID
        });
    }
    async listTokens(skip = 0, limit = 10) {
        return this.postResponse("/listTokens", {
            "skip": skip,
            "limit": limit
        });
    }
    async sendToken(address, privateKey, to, amount, assetID) {
        return this.postResponse("/sendToken", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "amount": amount,
            "assetID": assetID
        });
    }
    async sendRawTransaction(address, privateKey, to, amount, assetID = -1, estimatedFee = 1) {
        let estimatedFee_ = estimatedFee;
        const getEstimatedFeePromise = this.getEstimatedFee().then(({ data }) => {
            if (!data.error) {
                if (parseFloat(data.estimatedBandWidthFee) > estimatedFee)
                    estimatedFee_ = parseFloat(data.estimatedBandWidthFee);
            }
        }).catch(error => {
            console.error("Error fetching estimated fee:", error);
        });
        await Promise.all([getEstimatedFeePromise]);
        return this.postResponse("/sendRawTransaction", sendRawTransaction(address, privateKey, to, amount, estimatedFee_, assetID));
    }
    async givemePiri(address) {
        return this.postResponse("/givemePiri", {
            "address": address
        });
    }
    async getEstimatedFee() {
        return this.postResponse("/getEstimatedFee");
    }
}