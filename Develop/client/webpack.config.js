const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Generates an HTML file from the template
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Text Editor',
      }),
      // Injects the custom service worker
      new InjectManifest({
        swSrc: './src/src-sw.js',
        swDest: 'service-worker.js',
      }),
      // Generates a manifest.json file
      new WebpackPwaManifest({
        name: 'Text Editor',
        short_name: 'JATE',
        description: 'Just Another Text Editor!',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    module: {
      rules: [
        // CSS loader to handle CSS files
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        // Babel loader to transpile ES6+ code to ES5
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
