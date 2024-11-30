"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMnemonic = getMnemonic;
const bip39 = __importStar(require("bip39"));
const mongo_sanitize_1 = __importDefault(require("mongo-sanitize"));
function getMnemonic(privateKey, language = 'english') {
    privateKey = (0, mongo_sanitize_1.default)(privateKey);
    if (language) {
        try {
            language = (0, mongo_sanitize_1.default)(language);
            bip39.setDefaultWordlist(language);
        }
        catch (e) {
            return {
                data: {
                    error: 1,
                    message: 'Definition of Language is Incorrect! You can define portuguese, english, french, korean, spanish, italian, japanese, chinese_traditional'
                }
            };
        }
    }
    else {
        bip39.setDefaultWordlist('english');
    }
    try {
        const mnemonic = bip39.entropyToMnemonic(privateKey);
        return { data: { error: 0, mnemonic: mnemonic } };
    }
    catch (e) {
        return { data: { error: 1, message: 'There is an error. Check your private key!' } };
    }
}
//# sourceMappingURL=getMnemonic.js.map