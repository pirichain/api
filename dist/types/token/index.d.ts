import { FetchResponse } from "../config/response";
import { AxiosInstance } from "axios";
export declare class Token extends FetchResponse {
    constructor(client: AxiosInstance);
    createToken(creatorAddress: string, privateKey: string, tokenName: string, tokenSymbol: string, totalSupply: string, logo: any, decimals: number, description: string, webSite: string, socialMediaFacebookURL?: string, socialMediaTwitterURL?: string, socialMediaMediumURL?: string, socialMediaYoutubeURL?: string, socialMediaRedditURL?: string, socialMediaBitcoinTalkURL?: string, socialMediaInstagramURL?: string, mailAddress?: string, companyAddress?: string, sector?: string, hasAirdrop?: boolean, hasStake?: boolean): Promise<any>;
    getToken(assetID: number): Promise<any>;
    listTokens(skip?: number, limit?: number): Promise<any>;
    sendToken(address: string, privateKey: string, to: string, amount: number, assetID: number): Promise<any>;
    sendRawTransaction(address: string, privateKey: string, to: string, amount: number, assetID?: number, estimatedFee?: number): Promise<any>;
    givemePiri(address: string): Promise<any>;
    getEstimatedFee(): Promise<any>;
}
