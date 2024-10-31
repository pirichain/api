import {create, ApisauceInstance, ApisauceConfig} from 'apisauce';

function client(URL: string |undefined, ...rest: ApisauceConfig[]): ApisauceInstance {
    const config = Object.assign({}, {baseURL: URL}, rest);
    return create(config);
}

export { client };
