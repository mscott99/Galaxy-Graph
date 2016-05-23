var path = require('path');

module.exports = {
  entry:'./app/entry.js',
debug:"true",
  output:{
    filename:'./build/bundle.js',
    path: __dirname
  },
  node:{
fs:"empty"
  },
  resolve:{
    extensions:['','.css','.js','json']
  },


  module:{
    loaders: [
      {
        test: /\.json$/,
        
        loader: 'json-loader'
      },
      {
        test: /\.js?$/,
        include:'./app',
        exclude:'./node_modules',
        loader: 'babel',
        query:{
        presets:['es2015']
        },
      }
    ]
  }
}
