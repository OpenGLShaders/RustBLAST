
var selection = d3.select("#chart1").selectAll(".bar");
selection.style("height", "50px");


var p = d3.select("body")
          .selectAll("p")
          .data([4, 32, 23, 43, 20, 7, 86])
          .enter()
          .append("p")
          .text(function(d) { return "I'm #" + d + "!"});

function do_update() {
  
}
