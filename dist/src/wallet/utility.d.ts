export declare function getPubKeyFromPrivate(pri: string): string | undefined;
export declare function convertToBase58(pubAddress: string): {
    pub: string;
    base58: string;
};
export declare function base58extracted(publicKey: string, prefix: string): string;
