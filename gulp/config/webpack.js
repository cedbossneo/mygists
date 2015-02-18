var webpack = require('webpack'),
  path = require('path');

module.exports = function (paths) {
  return {
    cache: false,
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './app/app.jsx'
    ],

    output: {
      path: paths.app,
      filename: 'bundle.js'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],

    devtool: 'eval',
    stats: {
      colors: true,
      reasons: true
    },

    resolve: {
      // Allow to omit extensions when requiring these files
      extensions: ['', '.js', '.jsx']
    },

    module: {
      noParse: [/gulp/],
      loaders: [
      {test: /\.jsx?$/, loader: 'jsx-loader?harmony', include: /react-highlight/},
      {test: /\.jsx$/, loaders: ['react-hot-loader', '6to5-loader'], exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'}
        //{test: new RegExp(appDir + '.*\.jsx'), loaders: ['react-hot-loader', '6to5-loader']},
        //{test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader'},
        //{test: /\.json$/, loader: 'json'},
        //{test: /\.(eot|woff)$/, loader: 'file'}
      ]
    }
  };
};
