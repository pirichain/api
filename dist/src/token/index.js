"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendRawTransaction_1 = require("./sendRawTransaction");
const response_1 = require("../config/response");
class Token extends response_1.FetchResponse {
    constructor(baseURL) {
        super(baseURL);
    }
    createToken(creatorAddress, privateKey, tokenName, tokenSymbol, totalSupply, logo, decimals, description, webSite, socialMediaFacebookURL = "", socialMediaTwitterURL = "", socialMediaMediumURL = "", socialMediaYoutubeURL = "", socialMediaRedditURL = "", socialMediaBitcoinTalkURL = "", socialMediaInstagramURL = "", mailAddress = "", companyAddress = "", sector = "", hasAirdrop = false, hasStake = false) {
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
    getToken(assetID) {
        return this.postResponse("/getToken", {
            "assetID": assetID
        });
    }
    listTokens(skip = 0, limit = 10) {
        return this.postResponse("/listTokens", {
            "skip": skip,
            "limit": limit
        });
    }
    sendToken(address, privateKey, to, amount, assetID) {
        return this.postResponse("/sendToken", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "amount": amount,
            "assetID": assetID
        });
    }
    sendRawTransaction(address_1, privateKey_1, to_1, amount_1) {
        return __awaiter(this, arguments, void 0, function* (address, privateKey, to, amount, assetID = -1, estimatedFee = 1) {
            let estimatedFee_ = estimatedFee;
            const getEstimatedFeePromise = this.getEstimatedFee().then(({ data }) => {
                if (!data.error) {
                    if (parseFloat(data.estimatedBandWidthFee) > estimatedFee)
                        estimatedFee_ = parseFloat(data.estimatedBandWidthFee);
                }
            }).catch(error => {
                console.error("Error fetching estimated fee:", error);
            });
            yield Promise.all([getEstimatedFeePromise]);
            return this.postResponse("/sendRawTransaction", (0, sendRawTransaction_1.sendRawTransaction)(address, privateKey, to, amount, estimatedFee_, assetID));
        });
    }
    givemePiri(address) {
        return this.postResponse("/givemePiri", {
            "address": address
        });
    }
    getEstimatedFee() {
        return this.postResponse("/getEstimatedFee");
    }
}
exports.default = Token;
//# sourceMappingURL=index.js.map