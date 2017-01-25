const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src/client/index.js')
  ],
  output: {
    path: path.join(__dirname, 'src/public'),
          filename: 'build.js',
  },
  resolve: {
    extensions: [
      '','.js','.jsx'
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
