const path = require('path');

module.exports = {
  entry: {
      // es6:'./src-es6/index.js',
      // commonjs:'./src-commonjs',
      main:'./src/index.js'
      
    },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};