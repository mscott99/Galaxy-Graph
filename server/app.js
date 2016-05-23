var express = require('express');
var path = require ('path');
var app = express();
const htmlPath = path.join(__dirname,'../build/index.html');
const folderPath = path.join(__dirname, '../build');

app.use(express.static(folderPath));


if(app.get('env') === 'development'){
  app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
               message: err.message,
               error:err
  });

  });

}

app.get('/', function(req, res){
  res.sendFile(htmlPath);
});
module.exports = app;
