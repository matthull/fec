import { select } from 'd3-selection'
import { sankey } from 'd3-sankey'

const margin = {top: 10, right: 10, bottom: 10, left: 10},
  width = 700 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom

const svg = select("#sankey-container").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

const sankeyDiagram = sankey()
    .nodeWidth(36)
    .nodePadding(40)
    .size([width, height]);

const graph = {nodes: [], links: []}

export class SankeyDiagram {

}
