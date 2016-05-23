var path = require('path');

module.exports = {
  entry:'./app/entry.js',

  output:{
    filename:'./build/bundle.js',
    path: __dirname
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
