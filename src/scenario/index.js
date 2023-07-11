const {getScenario} = require("./getScenario");
const {createScenario} = require("./createScenario");
const {editScenario} = require("./editScenario");
const {listMyScenarios} = require("./listMyScenarios");
const {listScenarios} = require("./listScenarios");
const {executeScenario} = require("./executeScenario");
const {previewScenario} = require("./previewScenario");

module.exports ={
    getScenario: getScenario,
    createScenario: createScenario,
    editScenario: editScenario,
    listMyScenarios: listMyScenarios,
    listScenarios: listScenarios,
    executeScenario: executeScenario,
    previewScenario: previewScenario
}