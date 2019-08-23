const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    'test-1': './src/test-1.js',
    'test-2': './src/test-2.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'test-1.html',
      template: 'src/test-1.html',
      chunks: ['test-1'],
    }),
    new HtmlWebpackPlugin({
      filename: 'test-2.html',
      template: 'src/test-2.html',
      chunks: ['test-2'],
    })
  ]
};
