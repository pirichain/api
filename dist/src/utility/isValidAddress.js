"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidAddress = isValidAddress;
const base_58_1 = __importDefault(require("base-58"));
const sha256_1 = __importDefault(require("sha256"));
function isValidAddress(address) {
    try {
        const check = base_58_1.default.decode(address.slice(2));
        const checkHex = Buffer.from(check).toString('hex');
        const last8 = checkHex.slice(-8);
        let remaining = checkHex.slice(0, -8);
        remaining = sha256_1.default.x2(remaining);
        remaining = sha256_1.default.x2(remaining);
        return (remaining.slice(0, 8) === last8);
    }
    catch (_a) {
        return false;
    }
}
//# sourceMappingURL=isValidAddress.js.map