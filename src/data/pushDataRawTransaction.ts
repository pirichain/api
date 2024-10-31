import pkg from 'elliptic';

const {ec: EC} = pkg;
import sha from 'sha256';
import crypto from 'crypto';

const ec = new EC('secp256k1');


function toHexString(byteArray: Uint8Array): string {
    return Array.from(byteArray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}

function getSharedKey(pri: string, pub: string): string {
    const tmpKey = ec.keyFromPrivate(pri, "hex");
    const fKey = ec.keyFromPublic(pub, "hex");
    return tmpKey.derive(fKey.getPublic()).toString(16);
}

function encryptData(pri: string, pub: string | null, value: string): string | { error: number, data: string } {
    let sharedKey = pri;
    try {
        if (pub) sharedKey = getSharedKey(pri, pub);
        // @ts-ignore
        const cipher = crypto.createCipher('aes-256-cbc', sharedKey);
        let crypted = cipher.update(value, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    } catch (e) {
        return {error: 1, data: 'Error occurred while encrypting; ' + e};
    }
}

function sortObjectProperty(o: Record<string, any>): Record<string, any> {
    const sorted: Record<string, any> = {};
    const keys = Object.keys(o).sort();

    for (const key of keys) {
        sorted[key] = o[key];
    }
    return sorted;
}

function preparePushDataWithSignature(
    customData: any[],
    privateKey: string,
    receiptPubKey: string | null
): string | { error: number, data: string } {
    if (customData) {
        if (Array.isArray(customData)) {
            customData.forEach(f => {
                if (f.enc > 0) {
                    f.value = encryptData(privateKey, receiptPubKey, f.value);
                }
                if (f.enc > 1) {
                    f.key = encryptData(privateKey, receiptPubKey, f.key);
                }
            });
            return JSON.stringify(customData);
        } else return {error: 1, data: 'Custom data must be an array!'};
    } else return {error: 1, data: 'Custom data must be defined!'};
}

export function pushDataRawTransaction(
    from: string,
    privateKey: string,
    to: string | null,
    customData: any[],
    receiverPubKey: string | null,
    amount: number = 0
) {
    let pubKey = '';
    const timeStamp = new Date().getTime();
    if (!Array.isArray(customData)) return {error: 1, data: "Custom Data type should be array!"};

    const customData_ = customData.map(item => {
        if (to) {
            return sortObjectProperty({
                ...item,
                from: from,
                timeStamp: timeStamp,
                to: to
            });
        }
        return sortObjectProperty({
            ...item,
            from: from,
            timeStamp: timeStamp,
        });
    });

    const message_ = preparePushDataWithSignature(customData_, privateKey, receiverPubKey);
    if (typeof message_ === 'object' && message_.error) return message_;

    const key = ec.keyFromPrivate(privateKey);
    pubKey = key.getPublic().encode('hex', false);
    const message = sha(message_ as string);

    const resultSign = key.sign(message).toDER();
    const signatureData = toHexString(new Uint8Array(resultSign));

    let params: Record<string, any> = {
        amount: amount,
        assetID: -1,
        timeStamp: timeStamp,
        signature: signatureData,
        pubKey: pubKey,
        address: from,
        customData: customData_,
        to: to
    };

    if (receiverPubKey) params.indPubKey = receiverPubKey;

    return sortObjectProperty(params);
}
