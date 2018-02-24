const webpack = require('webpack'),
  path = require('path'),
  srcDir = path.resolve( __dirname, 'src' ),
  publicDir = path.resolve( __dirname, 'public' ),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ReloadPlugin = require('reload-html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: srcDir,
  devtool: 'hidden-source-map',
  entry: {
    script: './index.js'
  },
  output: {
    path: publicDir,
    filename: '[name].js',
    publicPath: './',
    sourceMapFilename: 'main.map'
  },
  devServer: {
    contentBase: srcDir,
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    open: true,
    hot: true,
    stats: 'errors-only',
    port: 3000,
    openPage: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader'
      },
      {
        test: [/\.css$/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader'
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
	        'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|txt|xml)$/,
        use: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ReloadPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'Zultrail',
      description: 'Una app para el alquiler de vehiculos.',
      template: path.join(srcDir, 'template.html'),
      filename: 'index.html',
      chunks: ['script']
    }),
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/)
  ]
}
