const path = require('path')
const getLoaders = require('./loaders')
const getPreloaders = require('./preloaders')
const getPlugins = require('./plugins')
const paths = require('./paths')
const ENV = 'DEV'

module.exports = {
  devtool: 'eval',
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
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
  plugins: getPlugins(ENV),
  eslint: {
    configFile: path.resolve('.eslintrc')
  }
}
