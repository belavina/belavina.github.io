const commonPaths = require('./common-paths');
const webpack = require('webpack');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: false,
    port: 8090,
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.EMAILJS_USER_ID': JSON.stringify(env.EMAILJS_USER_ID),
      'process.env.EMAILJS_SERVICE_ID': JSON.stringify(env.EMAILJS_SERVICE_ID),
      'process.env.EMAILJS_TEMPLATE_ID': JSON.stringify(env.EMAILJS_TEMPLATE_ID),
    }),
  ]
};

module.exports = config;
