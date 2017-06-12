const { resolve } = require('path')

const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .map(p => resolve(p))

module.exports = {
  nodePaths,
  appSrc: resolve(__dirname, '../src'),
  appDist: resolve(__dirname, '../dist'),
  appNodeModules: resolve('node_modules')
}
