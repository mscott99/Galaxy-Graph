var path = require('path');

module.exports = {
  devtool:"cheap-source-map",
  entry:'./app/entry.js',
  debug:"true",
  output:{
    filename:'./build/bundle.js',
    path: __dirname
  },
  resolve:{
    extensions:['','.css','.js','json']
  },
  node:{
   fs:"empty"
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
