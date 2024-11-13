import { FetchResponse } from "../config/response";
import { AxiosInstance } from '../utility/modules';
export default class Scenario extends FetchResponse {
    constructor(client: AxiosInstance);
    getScenario(address: string): Promise<any>;
    createScenario(address: string, privateKey: string, scenarioText: string, name: string, description: string, tags: string[], executeOnlyByMe?: boolean): Promise<any>;
    editScenario(address: string, privateKey: string, scenarioText: string, scenarioAddress: string): Promise<any>;
    listMyScenarios(ownerAddress: string): Promise<any>;
    listScenarios(skip?: number, limit?: number): Promise<any>;
    executeScenario(scenarioAddress: string, address: string, privateKey: string, method: string, params?: any, amount?: number, assetID?: number | null): Promise<any>;
    callScenario(scenarioAddress: string, address: string, publicKey: string, method: string, params?: any): Promise<any>;
    previewScenario(scenarioText: string, address: string, privateKey: string, method: string, params?: any): Promise<any>;
}
