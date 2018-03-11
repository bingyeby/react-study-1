/**
 * Build mode config
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src')
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
  },
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
    new webpack.DllReferencePlugin({// 建立映射关系，在编译的过程中通过json来把那些预编译的资源弄进来
      context: __dirname,
      manifest: require('./static/basic-manifest.json')//名单
    })
  ],
};