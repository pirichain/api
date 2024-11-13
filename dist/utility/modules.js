// @ts-ignore
import base58 from 'base58check';
import sha256 from 'sha256';
import * as bip39 from 'bip39';
import * as pkg from "elliptic";
import sanitize from 'mongo-sanitize';
import RIPEMD160 from "ripemd160";
const { ec: EC } = pkg;
const ec = new EC('secp256k1');
export { base58, sha256, bip39, ec, sanitize, RIPEMD160 };
