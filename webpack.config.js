const path = require('path');
 
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
       query: {
         presets: ['es2015'],
       }
     },
     {
       test: /\.(css|scss)$/,
       use: [
        'style-loader',
        'css-loader',
        'sass-loader',
       ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
 {
            loader: 'file-loader',
            options: {}  
          }
      ]
    },
   ]
 }
};