import axios from 'axios';
function client(URL, ...rest) {
    const config = Object.assign({}, { baseURL: URL }, rest);
    return axios.create(config);
}
export { client };
//# sourceMappingURL=client.js.map