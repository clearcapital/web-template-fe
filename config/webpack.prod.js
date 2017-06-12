const getLoaders = require('./loaders')
const getPlugins = require('./plugins')
const paths = require('./paths')
const ENV = 'production'

module.exports = {
  entry: [ './index.js' ],
  output: {
    filename: 'bundle.js',
    path: paths.appDist,
    publicPath: '/'
  },
  context: paths.appSrc,
  devtool: 'source-map',
  resolve: {
    modules: [
      paths.appNodeModules
    ],
    extensions: ['.js', '.json']
  },
  module: {
    noParse: /node_modules\/.bin/,
    rules: getLoaders(ENV)
  },
  plugins: getPlugins(ENV)
}
