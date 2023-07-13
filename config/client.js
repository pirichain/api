const {create} = require("apisauce");
function client(URL, ...rest) {
    console.log(URL);
    return create({
        baseURL: URL,
        ...rest
    })
}
module.exports = {client}
