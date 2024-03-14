const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const EslingPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new EslingPlugin({ extensions: 'ts' }),
  ],
}
