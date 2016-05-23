



// Learn about API authentication here: https://plot.ly/nodejs/getting-started
// Find your api_key here: https://plot.ly/settings/api
var plotly = require('../dist/plotly.js');


//var json = require('comment-json');
//var reader = require('../reader.js');

//var obj = reader();
//test
var obj = {
  x:[1,2,3],
  y:[2,2,2],
  z:[1,1,1]

}
console.log(obj);
var trace1 = {
  x: obj.x,
  y: obj.y,
  z: obj.z,
  mode: "markers",
  marker: {
    size: 12,
    line: {
      color: "rgba(217, 217, 217, 0.14)",
      width: 0.5
    },
    opacity: 0.8
  },
  type: "scatter3d"
};

var data = [trace1];
var layout = {margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0
}};

var graphOptions = {layout: layout, filename: "simple-3d-scatter", fileopt: "overwrite"};
plotly.plot(document.getElementById('content'), data, function (err, msg) {
    console.log(msg);
});

