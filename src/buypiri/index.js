const {createAddressForBuyPiri} = require('./createAddressForBuyPiri');
const {getBalanceForBuyPiri} = require('./getBalanceForBuyPiri');
const {getPiriPrice} = require('./getPiriPrice');
const {givemePiri} = require("./givemePiri");

module.exports = {
    createAddressForBuyPiri: createAddressForBuyPiri,
    getBalanceForBuyPiri: getBalanceForBuyPiri,
    getPiriPrice: getPiriPrice,
    givemePiri: givemePiri
}