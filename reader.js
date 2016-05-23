var json = require('comment-json');
var fs = require('fs');
var obj = json.parse(fs.readFileSync('./test.json').toString());
console.log(obj.x[2]);

module.exports = function(){
return obj;
}
