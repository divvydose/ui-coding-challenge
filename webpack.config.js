const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const buildConfig = require('./buildConfig')

module.exports = {
  context: __dirname,
  devServer: {
    clientLogLevel: 'error', // The default value for this outputs too much in DevTools.
    contentBase: buildConfig.paths.app.src,
    historyApiFallback: {
      disableDotRule: true,
    },
    host: '0.0.0.0',
    hot: true,
    port: buildConfig.webpackDevServerPort,
  },
  devtool: 'eval-cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${buildConfig.webpackDevServerPort}`,
    'webpack/hot/only-dev-server',
    buildConfig.paths.app.mainJs,
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?|\.tsx?$/,
        include: [buildConfig.paths.app.src],
        loader: 'babel-loader',
        options: {
          cacheDirectory: buildConfig.paths.babelCache,
        },
      },
      {
        test: /\.scss$/,
        include: [buildConfig.paths.app.src],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { import: false, modules: false, sourceMap: false },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.module\.css$/,
        include: [buildConfig.paths.app.src],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    chunkFilename: 'js/[name].js',
    filename: 'js/[name].js',
    path: buildConfig.paths.dist,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: buildConfig.paths.app.favicon,
      // "inject: true" places all JavaScript resources at the bottom of the body element.
      inject: true,
      template: buildConfig.paths.app.html,
    }),
    new webpack.HotModuleReplacementPlugin(),

    // Allows the HMR plugin to output more legible names.
    new webpack.NamedModulesPlugin(),

    // Ignore locales from moment.
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/img',
          to: 'img',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', buildConfig.paths.base],
  },
}
