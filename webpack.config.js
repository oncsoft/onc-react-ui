const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/devIndex.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.module\.css$/, // Sadece .module.css uzantısına sahip dosyaları seç
        use: [
          'style-loader', // Stil dosyasını DOM'a enjekte etmek için kullanılır
          {
            loader: 'css-loader',
            options: {
              modules: true, // CSS Modülleri etkinleştirildi
            },
          },
        ],
      },
      {
        test: /\.css$/, // Diğer .css uzantısına sahip dosyaları seç
        use: ['style-loader', 'css-loader'], // Normal CSS dosyalarını işlemek için kullanılır
        exclude: /\.module\.css$/, // .module.css uzantısına sahip dosyaları hariç tut
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 8192, // This sets a limit for when the file is inlined as a data URL (bytes)
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3030,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
