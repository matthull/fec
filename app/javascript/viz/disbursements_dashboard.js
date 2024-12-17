import { createSunburstDiagram } from 'viz/disbursements_sunburst'
import { createGeoPlot } from 'viz/disbursements_geo'

document.addEventListener('DOMContentLoaded', function() {
  if (window.disbursementHierarchy) {
    createSunburstDiagram()
    createGeoPlot()
  }
})
