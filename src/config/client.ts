import axios, {AxiosInstance, CreateAxiosDefaults} from 'axios';

function client(URL: string |undefined, ...rest: CreateAxiosDefaults[]): AxiosInstance {
    const config = Object.assign({}, {baseURL: URL}, rest);
    return axios.create(config);
}

export { client };
