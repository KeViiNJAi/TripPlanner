const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    //publicPath: './public/index',
    filename: 'bundle.js',
  },
};
