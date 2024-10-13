import path from 'path';

export default {
  entry: './src/index.js',  // Entry point for your application
  output: {
    filename: 'bundle.js',  // Name of the output bundle file
    path: path.resolve('dist'),  // The output directory (dist)
    libraryTarget: 'module',  // Ensure the output is an ES module
  },
  target: 'node',  // Specify that the environment is Node.js
  externals: [
    'express',       // Externalize express so it is not bundled
    'safe-buffer',   // Externalize safe-buffer so it is not bundled
  ],
  module: {
    rules: [
      {
        test: /\.js$/,  // Process all JS files
        exclude: /node_modules/,  // Ignore files in node_modules
        use: 'babel-loader',  // Use Babel to transpile JavaScript
      },
    ],
  },
  experiments: {
    outputModule: true,  // Enable support for ES Modules
  },
};
