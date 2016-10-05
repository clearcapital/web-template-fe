const getLoaders = require('./loaders')
const getPreloaders = require('./preloaders')
const getPlugins = require('./plugins')
const paths = require('./paths')
const ENV = 'PROD'

module.exports = {
  devtool: 'source-map',
  entry: [
    paths.appSrc
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/app.bundle.js',
    publicPath: '/'
  },
  resolve: {
    fallback: paths.nodePaths,
    extensions: ['.js', '.json', '.jsx', '']
  },
  module: {
    noParse: /node_modules\/.bin/,
    preLoaders: getPreloaders(ENV),
    loaders: getLoaders(ENV)
  },
  plugins: getPlugins(ENV)
}
