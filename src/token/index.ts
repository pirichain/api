import {ApisauceInstance} from "apisauce";
import {sendRawTransaction} from "./sendRawTransaction";

class Token {
    private client: ApisauceInstance;

    constructor(client: ApisauceInstance) {
        this.client = client;
    }

    createToken(
        creatorAddress: string,
        privateKey: string,
        tokenName: string,
        tokenSymbol: string,
        totalSupply: number,
        logo: File,
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
    ) {
        const form = new FormData();
        form.append('creatorAddress', creatorAddress);
        form.append('privateKey', privateKey);
        form.append('tokenName', tokenName);
        form.append('tokenSymbol', tokenSymbol);
        form.append('totalSupply', totalSupply.toString());
        form.append('logo', logo, "logo.png");
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

        return this.client.post("/createToken", form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    getToken(assetID: string) {
        return this.client.post("/getToken", {
            "assetID": assetID
        });
    }

    listTokens(skip: number, limit: number) {
        return this.client.post("/listTokens", {
            "skip": skip,
            "limit": limit
        });
    }

    sendToken(address: string, privateKey: string, to: string, amount: number, assetID: string) {
        return this.client.post("/sendToken", {
            "address": address,
            "privateKey": privateKey,
            "to": to,
            "amount": amount,
            "assetID": assetID
        });
    }

    sendRawTransaction(address: string, privateKey: string, to: string, amount: number, assetID: number = -1) {
        return sendRawTransaction(this.client, address, privateKey, to, amount, assetID);
    }

    givemePiri(address: string) {
        return this.client.post("/givemePiri", {
            "address": address
        });
    }
}

export default Token;
