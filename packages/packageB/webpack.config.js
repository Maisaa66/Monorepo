const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  extends: '../../webpackbase.config.js',
  externals: [nodeExternals({ modulesDir: path.resolve(__dirname, '../../node_modules')})],
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'index.js',
    globalObject: 'this',
    library: {
      name: 'packageB',
      type: 'umd',
    },
  }
}