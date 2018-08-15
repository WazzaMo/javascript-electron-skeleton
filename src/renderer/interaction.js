
const ID_FIRST_ICON = "Icon"

import ICON_PLANNING from './assets/Icon-Planning.png'
import ICON_EXECUTION from './assets/Icon-Execution.png'
import ICON_REPORT from './assets/Icon-Report.png'


const BTN_CONCEPT = "BtnConcept"
const BTN_BUILD = "BtnBuild"
const BTN_REPORT = "BtnReport"

function getObject(id) {
  return document.getElementById(id)
}

function getIcon(icon) {
  return getObject(icon)
}

function setFirstIcon(newIcon) {
  var icon = getIcon(ID_FIRST_ICON)
  icon.src = newIcon
}

function onPlanningClicked() {
  setFirstIcon(ICON_PLANNING)
}

function onExecutionClicked() {
  setFirstIcon(ICON_EXECUTION)
}

function onReportClicked() {
  setFirstIcon(ICON_REPORT)
}

function setupButtons() {
  getObject(BTN_BUILD).onclick = onExecutionClicked;
  getObject(BTN_CONCEPT).onclick = onPlanningClicked;
  getObject(BTN_REPORT).onclick = onReportClicked;
}

console.log("Started from interaction")
setupButtons()
setFirstIcon(ICON_REPORT)
