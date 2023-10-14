const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    library: 'onc-react-ui',
    libraryTarget: 'umd',
  },
  optimization: {
    usedExports: true,
    minimize: true,
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
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // CSS dosyalarını ayrı bir dosyaya çıkarmak için kullanılır
          'css-loader', // CSS dosyalarını işlemek için kullanılır
        ],
        exclude: /\.module\.css$/, // .module.css uzantısına sahip dosyaları hariç tut
      },
      {
        test: /\.module\.css$/, // .module.css uzantısına sahip dosyaları seç
        use: [
          MiniCssExtractPlugin.loader, // CSS dosyalarını ayrı bir dosyaya çıkarmak için kullanılır
          {
            loader: 'css-loader',
            options: {
              modules: true, // CSS Modülleri etkinleştirildi
            },
          },
        ],
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css', // Çıktı CSS dosyasının adı
    }),
    // Diğer eklentiler...
  ],
};
