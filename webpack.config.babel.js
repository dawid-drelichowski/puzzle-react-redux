import webpack from 'webpack';
import path from 'path';
import process from 'process';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './src/css/main.css',
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src/js'), 'node_modules']
  },
  module: {
    rules: [
      {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
      {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=1000000&name=[ext]/[name].[ext]'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  plugins: (() => {
    const plugins = [
      new ExtractTextPlugin('css/[name].css')
    ];

    if (process.argv.indexOf('-p') !== -1) {
      plugins.push(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: `'production'`
        }
      }));
    }
    return plugins;
  })()
};
