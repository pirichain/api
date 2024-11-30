export interface RescuePrivateKeyResponse {
    data: {
        error?: number;
        message?: string;
        pri?: string;
        base58?: {
            pub: string;
            base58: string;
        };
        pub?: string;
    };
}
export declare function rescuePrivateKey(words: string, language?: string): RescuePrivateKeyResponse;
//# sourceMappingURL=rescuePrivateKey.d.ts.map