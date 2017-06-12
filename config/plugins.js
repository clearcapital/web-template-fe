const webpack = require('webpack')

module.exports = function getPlugins (env) {
  let plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]

  if (env === 'development') {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    // enable HMR globally

    plugins.push(new webpack.NamedModulesPlugin())
    // prints more readable module names in the browser console on HMR updates
  } else if (env === 'production') {
    const prodPlugins = [
      new webpack.optimize.AggressiveMergingPlugin({}),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          booleans: true,
          cascade: true,
          comparisons: true,
          conditionals: true,
          dead_code: true,
          drop_console: true,
          drop_debugger: true,
          evaluate: true,
          hoist_funs: true,
          hoist_vars: true,
          if_return: true,
          join_vars: true,
          loops: true,
          negate_iife: true,
          properties: true,
          sequences: true,
          unsafe: true,
          unused: true,
          warnings: false
        },
        mangle: {
          toplevel: true,
          sort: true,
          eval: true,
          properties: true
        },
        output: {
          space_colon: false,
          comments: false
        }
      })
    ]

    plugins = plugins.concat(prodPlugins)
  }

  return plugins
}
