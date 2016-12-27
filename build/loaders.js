// const paths = require('./paths')

module.exports = function getLoaders (env) {
  const loaders = [
    {
      test: /\.(js)$/,
      use: ['eslint-loader'],
      enforce: 'pre',
      exclude: /(node_modules|bower_components)/
    },
    {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader?modules']
    },
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader?modules', 'less-loader']
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules', 'sass-loader']
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      exclude: /\/favicon.ico$/,
      use: [
        // {
        //   loader: 'url-loader',
        //   options: {
        //     limit: 10000,
        //     name: 'static/media/[name].[hash:8].[ext]'
        //   }
        // }
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    {
      test: /\/favicon.ico$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'favicon.ico?[hash:8]'
          }
        }
      ]
    },
    {
      test: /\.(mp4|webm)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    }
  ]

  return loaders
}
