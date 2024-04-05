const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './index.js', // Assuming your entry file is named index.js
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' } // Copy contents of 'public' folder to 'dist/public'
      ]
    }),
  ],
};
