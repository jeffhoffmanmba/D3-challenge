// Chart Params
var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data from an external CSV file
d3.csv("data.csv").then(function(smurfData) {
  console.log(smurfData);
  console.log([smurfData]);

  // Create a function to parse date and time
  var parseTime = d3.timeParse("%d-%b-%Y");

  // Format the data
  smurfData.forEach(function(data) {



  });

  // Create scaling functions
  var xTimeScale = d3.scaleTime()
    .domain()
    .range();

  var yLinearScale1 = d3.scaleLinear()
    .domain()
    .range();

  var yLinearScale2 = d3.scaleLinear()
    .domain()
    .range();

  // Create axis functions
  var bottomAxis = d3.axisBottom(xTimeScale)
    .tickFormat(d3.timeFormat("%d-%b-%Y"));
  var leftAxis = d3.axisLeft();
  var rightAxis = d3.axisRight();

  // Add x-axis
  chartGroup.append("g")
    .attr()
    .call();

  // Add y1-axis to the left side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .classed("green", true)
    .call();

  // Add y2-axis to the right side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .classed("blue", true)
    .attr()
    .call();

  // Line generators for each line
  var line1 = d3.line()
    .x()
    .y();

  var line2 = d3.line()
    .x()
    .y();

  // Append a path for line1
  chartGroup.append("path")


    ;

  // Append a path for line2
  chartGroup.append("path")


;

  // Append axes titles
  chartGroup.append("text")
    .attr()
    .classed("dow-text text", true)
    .text("Dow Index");

  chartGroup.append("text")
    .attr()
    .classed("smurf-text text", true)
    .text("Smurf Sightings");
}).catch(function(error) {
  console.log(error);
});
