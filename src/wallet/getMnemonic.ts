import bip39 from 'bip39';
import sanitize from 'mongo-sanitize';

export function getMnemonic(privateKey: string, language: string = 'english') {
    privateKey = sanitize(privateKey);
    if (language) {
        try {
            language = sanitize(language);
            bip39.setDefaultWordlist(language);
        } catch (e) {
            return {
                data: {
                    error: 1,
                    message: 'Definition of Language is Incorrect! You can define portuguese, english, french, korean, spanish, italian, japanese, chinese_traditional'
                }
            };
        }
    } else {
        bip39.setDefaultWordlist('english');
    }
    try {
        const mnemonic = bip39.entropyToMnemonic(privateKey);
        return { data: { error: 0, mnemonic: mnemonic } };
    } catch (e) {
        return { data: { error: 1, message: 'There is an error. Check your private key!' } };
    }
}
