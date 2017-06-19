import { resolve } from 'path'

export default env => {
  return {
    // input
    'entry': './src',

    // output
    'output': {
      'path': resolve('dist'),
      'filename': 'bundle.js'
    },

    // transformations
    'module': {
      'loaders': [
        {
          'test': /\.js$/,
          'exclude': /node_modules/,
          'loaders': [ 'babel-loader' ]
        }
      ]
    },

    // source maps
    'devtool': 'source-map',

    // server
    'devServer': {
      'contentBase': resolve('src'),
      'compress': true,
      'historyApiFallback': true
    }
  }
}
