var csv = require('csv-parser');
var fs = require('fs');
var jsonfile = require('jsonfile');
var time;
 var hasUpdated = false;
var file = './database.json';

var stream = csv({
    raw: false,     // do not decode to utf-8 strings 
      separator: ',', // specify optional cell separator 
        quote: '"',     // specify optional quote character 
          escape: '"',    // specify optional escape character (defaults to quote value) 
            newline: '\n',  // specify a newline character 
               // Specifing the headers 
})
var obj = {
  x:[],
  y:[],
  z:[]};
var maybe = true;
fs.createReadStream('./HYG-Database/hygdata_v3.csv')
  .pipe(stream)
  .on('data', function(data) {
    obj.x.push(data.x);
    obj.y.push(data.y);
    obj.z.push(data.z);
    hasUpdated = true;
    })

    
    

    //check every ten seconds if process is finished, to give the final object
    //to the database
setTimeout(function(){if(hasUpdated = false){jsonfile.writeFile(file, obj, function (err) {
    console.error(err)
});} else{
hasUpdated = false;
}}, 10000);


