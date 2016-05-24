



// Learn about API authentication here: https://plot.ly/nodejs/getting-started
// Find your api_key here: https://plot.ly/settings/api
var plotly = require('../dist/plotly.js');
var data = require('../database/data.js');
var obj = data();

//var json = require('comment-json');
//var reader = require('../reader.js');

//var obj = reader();
//test
/*var obj = {
x:[1,2,3],
y:[2,2,2],
z:[1,1,1]
}
*/
console.log(obj);
var trace1 = {
x: obj.x,
   y: obj.y,
   z: obj.z,
   mode: "markers",
   marker: {
size: 0.4,
      color:"rbg(210,6,3)",
      opacity: 0.2
   },
type: "scatter3d",

};

var data = [trace1];
var layout = {
  title:'Galaxy Star Distribution',
  titlefont: {
          family: "Delicious",
                size: 22,
                      color: "red"
          }
    
  };

  


  //plotly.plot(document.getElementById('content'), data, function (err, msg) {
  //   console.log(msg);
  //});
  plotly.newPlot(document.getElementById('content'), data, layout);

