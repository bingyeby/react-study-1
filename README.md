npm i autoprefixer-loader babel-core babel-eslint babel-loader babel-plugin-react-transform babel-plugin-transform-runtime babel-
preset-es2015 babel-preset-react babel-preset-stage-0 css-loader eslint eslint-plugin-babel eslint-plugin-react less less-loader react-transform-catch-errors re
act-transform-hmr redbox-react style-loader webpack webpack-dev-server -D

需要装webpack-cli


npm i autoprefixer-loader babel-core babel-eslint babel-loader babel-plugin-react-transform babel-plugin-transform-runtime babel-
preset-es2015 babel-preset-react babel-preset-stage-0 css-loader eslint eslint-plugin-babel eslint-plugin-react less less-loader react-transform-catch-errors re
act-transform-hmr redbox-react style-loader webpack webpack-dev-server -D

需要装webpack-cli

mode


TypeError: webpack.optimize.OccurenceOrderPlugin is not a constructor

webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead.

Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.module has an unknown property 'loaders'. These properties are valid:
   object { exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprContextRequest?, noParse?, rules?, defaultRules?, unknownContextCritical?, unkn
ownContextRecursive?, unknownContextRegExp?, unknownContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?, wrappedContextRegExp?, str
ictExportPresence?, strictThisContextOnImports? }
   -> Options affecting the normal modules (`NormalModuleFactory`).
 - configuration.resolve.extensions[0] should not be empty.
   -> A non-empty string
npm ERR! code ELIFECYCLE