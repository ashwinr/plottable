///<reference path="exampleReference.ts" />

module TSCDemo {
  var svg = d3.select("#table");
  var color = new ColorScale("Category10");
  color.domain(["foo", "bar", "baz"]);
  var legend = new Legend(color);
  legend.anchor(svg).computeLayout().render();

  color.domain(["loooooooooooooooong string", "bazbarbaz", "fizzbuzzbam"]);
  legend.render();
}
