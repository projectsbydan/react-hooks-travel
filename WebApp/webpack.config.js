const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ["whatwg-fetch", "./app.tsx"],
  output: {
    filename: "code.js",
    path: path.join(__dirname, "../WebService/WebService/wwwroot/"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js"],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, enforce: "pre", loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      // All files with a '.scss' extension will by handled by 'mini-css-extract-plugin'.
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css', chunkFilename: '[name].css' })
  ],

  externals: {},

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "../WebService/WebService/wwwroot/")
  }
};
