https://github.com/jrainlau/react-es6


需要装webpack-cli


autoprefixer-loader -> postcss-loader


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