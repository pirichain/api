"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidAddress = isValidAddress;
// @ts-ignore
const base58check_1 = __importDefault(require("base58check"));
const sha256_1 = __importDefault(require("sha256"));
function isValidAddress(address) {
    try {
        const check = base58check_1.default.decode(address.slice(2), "hex");
        const last8 = check.data.slice(-8);
        let remaining = check.data.slice(0, -8);
        remaining = sha256_1.default.x2(remaining);
        remaining = sha256_1.default.x2(remaining);
        return (remaining.slice(0, 8) === last8);
    }
    catch (_a) {
        return false;
    }
}
//# sourceMappingURL=isValidAddress.js.map