import { select } from 'd3-selection'

import Disbursements from "viz/disbursements"
import { SankeyDiagram } from 'viz/disbursements_sankey'

function initViz() {
  new SankeyDiagram()
}

document.addEventListener('DOMContentLoaded', function() {
  const disbursements = new Disbursements(window.rawDisbursements)
  console.log(disbursements)
  console.log(select)
})
