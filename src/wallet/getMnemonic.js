const bip39 = require('bip39');
const sanitize = require("mongo-sanitize");

module.exports.getMnemonic = function (privateKey, language = 'english') {
    privateKey = sanitize(privateKey);
    if (language) {
        try {
            language = sanitize(language);
            bip39.setDefaultWordlist(language);
        } catch (e) {
            return {
                data: {
                    error: 1,
                    message: 'Defination of Language is Incorrect! You can define portuguese,english,french,korean,spanish,italian,japanese,chinese_traditional'
                }
            };
        }
    } else
        bip39.setDefaultWordlist('english');
    try {
        const mnemonic = bip39.entropyToMnemonic(privateKey);
        return {data: {error: 0, mnemonic: mnemonic}};
    } catch (e) {
        return {data: {error: 1, message: 'There is an error. Check your privatekey!'}};
    }
}
