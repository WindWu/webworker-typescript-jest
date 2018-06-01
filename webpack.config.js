const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.worker\.js$/,
        use: { 
            loader: 'worker-loader'
        }
      }
    ],
    
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};