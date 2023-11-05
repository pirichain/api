// @ts-ignore
import base58check from 'base58check';
// @ts-ignore
import sha256 from 'sha256';

export function isValidAddress(address: string): boolean {
    try {
        const check = base58check.decode(address.substr(2), 'hex');
        const last8 = check.data.substr(check.data.length - 8, check.data.length);
        let remaining = check.data.substr(0, check.data.length - 8);
        remaining = sha256.x2(remaining);
        remaining = sha256.x2(remaining);
        return (remaining.substr(0, 8) === last8);
    } catch (error) {
        return false;
    }
}
