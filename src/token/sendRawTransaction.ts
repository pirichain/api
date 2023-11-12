import {ApisauceInstance} from "apisauce";
import {ec as EllipticEC} from 'elliptic';
// @ts-ignore
import sha256 from 'sha256';

const ec = new EllipticEC('secp256k1');

const endpoint = "/sendRawTransaction";

function toHexString(byteArray: number[]): string {
    return byteArray.map(byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}

function sortObjectProperty<T>(o: T): T {
    const sorted: any = {};
    const keys: string[] = [];

    for (const key in o) {
        // @ts-ignore
        if (o.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    keys.sort();

    for (const key of keys) {
        // @ts-ignore
        sorted[key] = o[key];
    }
    return sorted as T;
}

function prepareSendTokenWithSignature(from: string, toAddress: string, amount: number, assetID: number, globTime: number): string {
    const signaturedData = {
        from,
        to: toAddress,
        amount,
        assetID,
        fee: 0.1,
        timeStamp: globTime,
    };

    return JSON.stringify(sortObjectProperty(signaturedData));
}

export function sendRawTransaction(client: ApisauceInstance, address: string, privateKey: string, to: string, amount: number, assetID: number = -1) {
    const timeStamp = new Date().getTime();
    const message_ = prepareSendTokenWithSignature(
        address,
        to,
        amount,
        assetID,
        timeStamp,
    );

    const key = ec.keyFromPrivate(privateKey);
    // @ts-ignore
    const publicKey = key.getPublic().encode('hex');
    const message = sha256(message_);

    const resultSign = key.sign(message).toDER();
    const signatureData = toHexString(Array.from(resultSign));

    return client.post(endpoint, {
        "publicKey": publicKey,
        "address": address,
        "to": to,
        "amount": amount,
        "assetID": assetID,
        "signaturedData": signatureData,
        "timeStamp": timeStamp,
    });
}
