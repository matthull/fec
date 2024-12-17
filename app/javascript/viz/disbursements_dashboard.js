import Disbursements from "viz/disbursements"
import { createSunburstDiagram } from 'viz/disbursements_sunburst'

function initViz() {
  new SunburstDiagram()
}

document.addEventListener('DOMContentLoaded', function() {
  const disbursements = new Disbursements(window.rawDisbursements)

  createSunburstDiagram()
})
