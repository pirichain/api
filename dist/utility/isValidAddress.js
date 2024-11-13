import { base58, sha256 } from '../utility/modules';
export function isValidAddress(address) {
    try {
        const check = base58.decode(address.slice(2), "hex");
        const last8 = check.data.slice(-8);
        let remaining = check.data.slice(0, -8);
        remaining = sha256.x2(remaining);
        remaining = sha256.x2(remaining);
        return (remaining.slice(0, 8) === last8);
    }
    catch {
        return false;
    }
}