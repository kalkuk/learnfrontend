const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
//   mode: 'production',  
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  resolve: {  
    alias: {  
      'vue':  'vue/dist/vue.esm-bundler.js'   
    },  
  },  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader" ,"sass-loader"],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
        //Drop Options API from bundle
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: true,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
    }),
    new VueLoaderPlugin()
  ],  
};