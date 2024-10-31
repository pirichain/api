import base58 from 'base-58';
import sha256 from 'sha256';

export function isValidAddress(address: string): boolean {
    try {
        const check = base58.decode(address.slice(2));
        const checkHex = Buffer.from(check).toString('hex');
        const last8 = checkHex.slice(-8);
        let remaining = checkHex.slice(0, -8);
        remaining = sha256.x2(remaining);
        remaining = sha256.x2(remaining);
        return (remaining.slice(0, 8) === last8);
    } catch {
        return false;
    }
}
