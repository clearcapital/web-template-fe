const paths = require('./paths.js')

module.exports = function getPreloaders (env) {
  const preloaders = []

  if (env !== 'PROD') {
    preloaders.push(
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/,
        include: paths.appSrc
      }
    )
  }

  return preloaders
}
