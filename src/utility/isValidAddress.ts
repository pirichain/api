// @ts-ignore
import base58 from 'base58check';
import sha256 from 'sha256';

export function isValidAddress(address: string): boolean {
    try {
        const check = base58.decode(address.slice(2), "hex");
        const last8 = check.data.slice(-8);
        let remaining = check.data.slice(0, -8);
        remaining = sha256.x2(remaining);
        remaining = sha256.x2(remaining);
        return (remaining.slice(0, 8) === last8);
    } catch {
        return false;
    }
}
