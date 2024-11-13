export declare function pushDataRawTransaction(from: string, privateKey: string, to: string | null, customData: any[], receiverPubKey: string | null, amount?: number): Record<string, any> | {
    error: number;
    data: string;
};
