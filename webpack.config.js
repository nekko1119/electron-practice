const path = require("path");

module.exports = {
  mode: "development",
  target: "electron-renderer",
  entry: {
    "dist/app": "./src/index.tsx",
    main: "./src/main.ts"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader"
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  }
};
