export interface MnemonicResponse {
    data: {
        error: number;
        message?: string;
        mnemonic?: string;
    };
}
export declare function getMnemonic(privateKey: string, language?: string): MnemonicResponse;
//# sourceMappingURL=getMnemonic.d.ts.map