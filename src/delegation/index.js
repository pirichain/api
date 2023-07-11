const {checkDeputy} = require('./checkDeputy');
const {freezeCoin} = require('./freezeCoin');
const {joinAsDeputy} = require('./joinAsDeputy');
const {listDeputies} = require('./listDeputies');
const {listMyDelegation} = require('./listMyDelegation');
const {unFreezeCoin} = require('./unFreezeCoin');
const {listDelegationTopN} = require('./listDelegationTopN');
const {getMyRewardQuantity} = require("./getMyRewardQuantity");

module.exports = {
    checkDeputy: checkDeputy,
    freezeCoin: freezeCoin,
    joinAsDeputy: joinAsDeputy,
    listDeputies: listDeputies,
    listMyDelegation: listMyDelegation,
    unFreezeCoin: unFreezeCoin,
    listDelegationTopN: listDelegationTopN,
    getMyRewardQuantity: getMyRewardQuantity
}