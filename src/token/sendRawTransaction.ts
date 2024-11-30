import sha from 'sha256';
import pkg from "elliptic";
const ec = new pkg.ec("secp256k1");

function toHexString(byteArray: Uint8Array): string {
    return Array.from(byteArray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}

function sortObjectProperty(o: Record<string, any>): Record<string, any> {
    const sorted: Record<string, any> = {};
    const keys = Object.keys(o).sort();

    for (const key of keys) {
        sorted[key] = o[key];
    }
    return sorted;
}

function prepareSendTokenWithSignature(
    from: string,
    toAddress: string,
    amount: number,
    assetID: number,
    globTime: number,
    fee: number
): string {
    let data: Record<string, any> = {
        from: from,
        to: toAddress,
        amount: amount,
        assetID: assetID,
        timeStamp: globTime,
        fee: fee,
        metaData: {}
    };

    data = sortObjectProperty(data);
    return JSON.stringify(data);
}

export function sendRawTransaction(
    address: string,
    privateKey: string,
    to: string,
    amount: number,
    estimatedFee: number,
    assetID: number = -1
) {
    const timeStamp = Date.now();
    const message_ = prepareSendTokenWithSignature(
        address,
        to,
        amount,
        assetID,
        timeStamp,
        estimatedFee
    );
    const key = ec.keyFromPrivate(privateKey);
    const publicKey = key.getPublic().encode('hex', false);
    const message = sha(message_);

    const resultSign = key.sign(message).toDER();
    const signatureData = toHexString(new Uint8Array(resultSign));

    return {
        publicKey,
        address,
        to,
        amount,
        assetID,
        signaturedData: signatureData,
        timeStamp,
        fee: estimatedFee
    };
}
