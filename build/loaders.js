const paths = require('./paths')

module.exports = function getLoaders (env) {
  const loaders = [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      exclude: /\/favicon.ico$/,
      loader: 'file',
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\/favicon.ico$/,
      include: paths.appSrc,
      loader: 'file',
      query: {
        name: 'favicon.ico?[hash:8]'
      }
    },
    {
      test: /\.(mp4|webm)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\.html$/,
      loader: 'html',
      query: {
        attrs: ['link:href']
      }
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    }
  ]

  return loaders
}
