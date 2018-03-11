https://github.com/jrainlau/react-es6


### webpack4与之前的变化
  1. 需要装webpack-cli
  2. autoprefixer-loader -> postcss-loader
  3. 需要设置mode，webpack --mode 'production'
  4. OccurenceOrderPlugin不存在
    TypeError: webpack.optimize.OccurenceOrderPlugin is not a constructor
  5. UglifyJsPlugin消失
    webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead.
  6. loader的配置方式发生了变化
    Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
    - configuration.module has an unknown property 'loaders'. These properties are valid:


# 最简易的配置：

  devDependencies
    babel-core babel-loader babel-preset-es2015 babel-preset-react 
    css-loader less less-loader style-loader url-loader 
    webpack webpack-cli webpack-dev-server
  dependencies
    react react-dom react-intl
  script 
    webpack-dev-server --inline --hot
    webpack --progress --profile --colors
    webpack -p --config webpack.dll.config.js --progress --profile --colors

### dll使用
  http://blog.csdn.net/lx376693576/article/details/77883603
  新建一个配置文件webpack.dll.config.js
    entry: {
        basic: ['react', 'react-dom', 'lodash', './src/common.js']
    },
    output: {
        path: path.resolve(__dirname, 'static'),// string
        filename: '[name].dll.js',//生成文件名字
        library: '[name]_library'// 生成文件中的一些映射关系，与下面DllPlugin中配置对应
    },
    plugins: [
        // 使用DllPlugin插件编译上面配置的npm包
        new webpack.DllPlugin({
            path: path.join(__dirname, 'static', '[name]-manifest.json'),// 生成名单，映射关系
            name: '[name]_library'// 与output中配置对应
        })
    ],

  在原来的webpack.dev.config.js
    plugins:[
      new webpack.DllReferencePlugin({// 建立映射关系，在编译的过程中通过json来把那些预编译的资源弄进来
        context:__dirname,
        manifest:require('./static/basic-manifest.json')//名单
      })
    ]