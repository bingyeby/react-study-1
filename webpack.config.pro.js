/**
 * Build mode config
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './scripts/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'scripts')
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" },// translates CSS into CommonJS
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: "less-loader" } // compiles Less to CSS 
        ]
      }
    ]
  }
};