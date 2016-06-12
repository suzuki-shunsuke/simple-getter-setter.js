import path from 'path';
import webpack from 'webpack';

module.exports = [
  {
    entry: {
      'dist/simple-getter-setter': './src/main.js',
    },
    externals: [{
    }],
    resolve: {
      modulesDirectories: ['node_modules'],
      root: [path.resolve('.'),],
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
    ],
    output: {
      path: path.join(__dirname),
      filename: '[name].umd.js',
      library: 'prop',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        }
      }]
    }
  }, {
    entry: {
      'test/browser/dist/main.js': './test/browser/src/main.js',
    },
    externals: [{
    }],
    resolve: {
      modulesDirectories: ['node_modules'],
      root: [path.resolve('.'),],
    },
    plugins: [
      // new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.AggressiveMergingPlugin(),
      // new webpack.optimize.UglifyJsPlugin(),
    ],
    output: {
      path: path.join(__dirname),
      filename: '[name]',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        }
      }]
    }
  }
];
