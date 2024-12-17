import * as d3 from 'd3'
import topojson from "topojson"

const data = window.disbursementGeo

export async function createGeoPlot() {
  const path = d3.geoPath();
  const valuemap = new Map(data.map(d => [d.id, d.value]));
  const maxValue = d3.max(valuemap.values())
  const color = d3.scaleQuantize([1, maxValue], d3.schemeReds[9]);
  const us = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json').then((response) => response.json())

  // The counties feature collection is all U.S. counties, each with a
  // five-digit FIPS identifier. The statemap lets us lookup the name of 
  // the state that contains a given county; a state’s two-digit identifier
  // corresponds to the first two digits of its counties’ identifiers.
  const counties = topojson.feature(us, us.objects.counties);
  const states = topojson.feature(us, us.objects.states);
  const statemap = new Map(states.features.map(d => [d.id, d]));

  // The statemesh is just the internal borders between states, i.e.,
  // everything but the coastlines and country borders. This avoids an
  // additional stroke on the perimeter of the map, which would otherwise
  // mask intricate features such as islands and inlets. (Try removing
  // the last argument to topojson.mesh below to see the effect.)
  const statemesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b);

  const svg = d3.create("svg")
      .attr("width", 975)
      .attr("height", 610)
      .attr("viewBox", [0, 0, 975, 610])
      .attr("style", "max-width: 100%; height: auto;");

  // svg.append("g")
  //     .attr("transform", "translate(610,20)")
  //     .append(() => Legend(color, {title: "Campaign spending($)", width: 260}));

  const format = d3.format("$,.2f")
  svg.append("g")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features)
    .join("path")
      .attr("fill", d => color(valuemap.get(d.id)))
      .attr("d", path)
    .append("title")
      .text(d => `${d.properties.name}, ${statemap.get(d.id.slice(0, 2)).properties.name}\n${format(valuemap.get(d.id))}`);

  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

  const element = svg.node()
  d3.select('#geo-container').node().appendChild(element)
}
