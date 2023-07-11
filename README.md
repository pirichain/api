<p align="center" width="100%">
<img src="https://static.pirichain.com/logo/transparent/128" alt="pirichain logo">
<img src="https://www.gitbook.com/cdn-cgi/image/width=64,dpr=2,height=64,fit=contain,format=auto/https%3A%2F%2F3268399553-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FHQI4CotKdPSfFVAkQ7xr%252Ficon%252Fn5c0lu7a9FQq9CHWNlpD%252Fpiri-api-512.png%3Falt%3Dmedia%26token%3Df7a1b6a5-bb6d-483f-8f39-77896de4881e" alt="pirichain api logo">
</p>

# Pirichain API Package

---
Pirichain is blockchain system that based on dPos (Delegated Proof of Stake) and has it own environment to create wallet and token, transactions, sending or storing data as a transaction, delegation.

This repo is created for base API call and returns with json format. Some functions may not exists in this repo cause of private usage on commercial account. Some functions are added after major updates or urgent minors not with fix. 

#### - _**Pirichain Technology**_

---

You can access the npm library prepared for this repository at:
https://www.npmjs.com/package/@piriblockchain/core.

## Installation

You can install it using your preferred package manager or with npm to use the Pirichain API.
```
npm install @piriblockchain/core
```

## Getting Started
It is recommended to use modular import for using the package.

```
import pirichain from '@piriblockchain/core';

const {Wallet, Transaction, ...} = new pirichain({
    isMainNet: true, //this is default but you can use false for testnet
    testNetServer: 'https://testnet.pirichain.com', //this is default, but you can define your testnet endpoint which you build for yourself
    mainNetServer: 'https://core.pirichain.com' //this is default, and you have to leave this as a mainnet endpoint which provied by pirichain community.
})
```

You need to use POST methods for the endpoints. Additionally, some methods may differ for mainNet and testNet. For more detailed and up-to-date API documentation, you can access it at https://api.pirichain.com and refer to the Postman collection documents specified at that address.

Feel free to mark issues that you have.
