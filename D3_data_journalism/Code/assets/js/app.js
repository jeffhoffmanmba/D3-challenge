// set svg vars
var svgHeight = 550;
var svgWidth = 950;
 
var margin = {
  top: 50,
  right: 75,
  bottom: 75,
  left: 100
};
 
//chart area minus margins
var height = svgHeight - margin.top - margin.bottom;
var width = svgWidth - margin.left - margin.right;
 
//select body, append svg to it, set dimensions
var svg = d3.select("#scatter").append("svg")
      .attr("height", svgHeight)
      .attr("width", svgWidth);
 
//shift everything over by the margins / Append an SVG group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
 
//Load the data from the CSV
d3.csv("assets/data/data.csv").then(function(healthData) {
    console.log(healthData)
       // number conversion
    healthData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;    
       });
 
// scale x to chart height
var xScale = d3.scaleLinear()
.domain([d3.min(healthData, d=>d.poverty)*.9,
    d3.max(healthData, d => d.poverty)*1.2])
.range([0, width]);
 
// scale y to chart width
var yScale = d3.scaleLinear()
.domain([0, d3.max(healthData, d => d.healthcare)*1.1])
.range([height, 0]);
 
// create bottom/left axes
var bottomAxis = d3.axisBottom(xScale);
var leftAxis = d3.axisLeft(yScale);
 
// x axis
chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .style("font-size", "12px")
    .call(bottomAxis);
 
// y axis
chartGroup.append("g")  
    .style("font-size", "12px")
    .call(leftAxis);
 
// append circles
chartGroup.selectAll("circle")
    .data(healthData)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.poverty))
    .attr("cy", d =>  yScale(d.healthcare))
    .attr("r", 12)
    .attr("fill", "red");
 
// add State abbrev to circles
chartGroup.selectAll("text.text-circles")
    .data(healthData)
    .enter()
    .append("text")
    .classed("text-circles",true)
    .text(d => d.abbr)
    .attr("x", d => xScale(d.poverty))
    .attr("y", d => yScale(d.healthcare))
    .attr("dy",5)
    .attr("text-anchor","middle")
    .attr("font-size","12px")
    .attr("fill", "white");
 
// y axis
chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .classed("aText", true)
    .text("Lacks Healthcare (%)");
 
// x axis
chartGroup.append("text")
    .attr("y", height + margin.bottom/2 - 10)
    .attr("x", width / 2)
    .attr("dy", "1em")
    .classed("aText", true)
    .text("In Poverty (%)");
      });
 
