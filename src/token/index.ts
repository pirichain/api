import {sendRawTransaction} from './sendRawTransaction';
import {FetchResponse} from "../config/response";


export default class Token extends FetchResponse {
    constructor(baseURL: string) {
        super(baseURL);
    }

    createToken(
        creatorAddress: string,
        privateKey: string,
        tokenName: string,
        tokenSymbol: string,
        totalSupply: string,
        logo: any,
        decimals: number,
        description: string,
        webSite: string,
        socialMediaFacebookURL: string = "",
        socialMediaTwitterURL: string = "",
        socialMediaMediumURL: string = "",
        socialMediaYoutubeURL: string = "",
        socialMediaRedditURL: string = "",
        socialMediaBitcoinTalkURL: string = "",
        socialMediaInstagramURL: string = "",
        mailAddress: string = "",
        companyAddress: string = "",
        sector: string = "",
        hasAirdrop: boolean = false,
        hasStake: boolean = false
    ): Promise<any> {
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

    getToken(assetID: number): Promise<any> {
        return this.postResponse("/getToken", {
            "assetID": assetID
        });
    }

    listTokens(skip: number = 0, limit: number = 10): Promise<any> {
        return this.postResponse("/listTokens", {
            "skip": skip,
            "limit": limit
        });
    }

    sendToken(address: string, privateKey: string, to: string, amount: number, assetID: number): Promise<any> {
        return this.postResponse("/sendToken", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "amount": amount,
            "assetID": assetID
        });
    }

    async sendRawTransaction(address: string, privateKey: string, to: string, amount: number, assetID: number = -1, estimatedFee: number = 1): Promise<any> {
        let estimatedFee_ = estimatedFee;

        const getEstimatedFeePromise = this.getEstimatedFee().then((data) => {
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

    givemePiri(address: string): Promise<any> {
        return this.postResponse("/givemePiri", {
            "address": address
        });
    }

    getEstimatedFee(): Promise<any> {
        return this.postResponse("/getEstimatedFee");
    }
}
