module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader"
        }
      }
    ]
  }
}
