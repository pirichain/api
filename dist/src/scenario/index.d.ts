import { ApisauceInstance } from 'apisauce';
import { FetchResponse } from "../config/response";
interface IScenario {
    getScenario(address: string): Promise<any>;
    createScenario(address: string, privateKey: string, scenarioText: string, name: string, description: string, tags: string[], executeOnlyByMe?: boolean): Promise<any>;
    editScenario(address: string, privateKey: string, scenarioText: string, scenarioAddress: string): Promise<any>;
    listMyScenarios(ownerAddress: string): Promise<any>;
    listScenarios(skip?: number, limit?: number): Promise<any>;
    executeScenario(scenarioAddress: string, address: string, privateKey: string, method: string, params?: any, amount?: number, assetID?: number | null): Promise<any>;
    previewScenario(scenarioText: string, address: string, privateKey: string, method: string, params?: any): Promise<any>;
}
declare class Scenario extends FetchResponse implements IScenario {
    constructor(client: ApisauceInstance);
    getScenario(address: string): Promise<any>;
    createScenario(address: string, privateKey: string, scenarioText: string, name: string, description: string, tags: string[], executeOnlyByMe?: boolean): Promise<any>;
    editScenario(address: string, privateKey: string, scenarioText: string, scenarioAddress: string): Promise<any>;
    listMyScenarios(ownerAddress: string): Promise<any>;
    listScenarios(skip?: number, limit?: number): Promise<any>;
    executeScenario(scenarioAddress: string, address: string, privateKey: string, method: string, params?: any, amount?: number, assetID?: number | null): Promise<any>;
    previewScenario(scenarioText: string, address: string, privateKey: string, method: string, params?: any): Promise<any>;
}
export default Scenario;
export { IScenario };
