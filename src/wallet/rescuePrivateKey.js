const sanitize = require("mongo-sanitize");
const bip39 = require("bip39");
const {createNewAddress} = require("./createNewAddress");
const {getPubKeyFromPrivate, convertToBase58} = require("./utility");
module.exports.rescuePrivateKey = async function (words, language = 'english') {
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
    words = sanitize(words);
    let pri = '';
    try {
        pri = bip39.mnemonicToEntropy(words);
        let pubKey = getPubKeyFromPrivate(pri);
        let base58 = convertToBase58(pubKey);
        return {data: {pri: pri, base58: base58}};
    } catch (e) {
        const result = await createNewAddress();
        return {data: {pri: result.pri, pub: result.pub}};
    }
}
