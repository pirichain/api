const {client} = require('../../config/client')

const endpoint = "/createToken";

module.exports.createToken = (
    creatorAddress,
    privateKey,
    tokenName,
    tokenSymbol,
    totalSupply,
    logo,
    decimals,
    description,
    webSite,
    socialMediaFacebookURL = "",
    socialMediaTwitterURL = "",
    socialMediaMediumURL = "",
    socialMediaYoutubeURL = "",
    socialMediaRedditURL = "",
    socialMediaBitcoinTalkURL = "",
    socialMediaInstagramURL = "",
    mailAddress = "",
    companyAddress = "",
    sector = "",
    hasAirdrop = false,
    hasStake = false
) => {
    const form = new FormData();
    form.append('creatorAddress', creatorAddress);
    form.append('privateKey', privateKey);
    form.append('tokenName', tokenName);
    form.append('tokenSymbol', tokenSymbol);
    form.append('totalSupply', totalSupply);
    form.append('logo', logo);
    form.append('decimals', decimals);
    form.append('description', description);
    form.append('webSite', webSite);
    form.append('socialMediaFacebookURL', socialMediaFacebookURL);
    form.append('socialMediaTwitterURL', socialMediaTwitterURL);
    form.append('socialMediaMediumURL', socialMediaMediumURL);
    form.append('socialMediaYoutubeURL', socialMediaYoutubeURL);
    form.append('socialMediaRedditURL', socialMediaRedditURL);
    form.append('socialMediaBitcoinTalkURL', socialMediaBitcoinTalkURL);
    form.append('socialMediaInstagramURL', socialMediaInstagramURL);
    form.append('mailAddress', mailAddress);
    form.append('companyAddress', companyAddress);
    form.append('sector', sector);
    form.append('hasAirdrop', hasAirdrop);
    form.append('hasStake', hasStake);


    return client.post(endpoint, form, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })

};