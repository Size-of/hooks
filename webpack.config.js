const path = require('path')

module.exports = {
  entry: './src',
  output: {
    library: 'hooks',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: path.resolve(__dirname, './lib')
  },
  mode: 'production',
  resolve: {
    extensions: ['ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /.\tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /.\tsx?$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  } 
}