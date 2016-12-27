const getLoaders = require('./loaders')
const getPlugins = require('./plugins')
const paths = require('./paths')
const ENV = 'development'

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3001',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: paths.appDist,

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },
  context: paths.appSrc,
  devtool: 'cheap-eval-source-map', // 'inline-source-map' 'cheap-eval-source-map' 'source-map'
  devServer: {
    contentBase: paths.appDist,
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    noParse: /node_modules\/.bin/,
    rules: getLoaders(ENV)
  },
  plugins: getPlugins(ENV)
}
