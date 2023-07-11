const {create} = require("apisauce");


const mainnet = 'https://core.pirichain.com/';
const testnet = 'https://testnet.pirichain.com/';

const apiClient = create({
    baseURL:
        (typeof window !== "undefined" && typeof window.document !== "undefined") ?
            (localStorage.getItem('isMainnet') === 'true' || localStorage.getItem('isMainnet') === null ? mainnet : (
                localStorage.getItem("server") === null ? testnet : localStorage.getItem("server").replaceAll("\"", "")
            )) :
            (piriChainNetworkIsMainNet ? piriChainMainNetServer : piriChainTestNetServer)
});

module.exports = {
    client: apiClient
}
