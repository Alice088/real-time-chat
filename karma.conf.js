// var webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "chai"],

    files: ["test/**/*.spec.ts"],

    preprocessors: {
      "test/**/*.spec.ts": ["webpack", "sourcemap"],
    },

    webpack: require("@vue/cli-service/webpack.config.js"),

    reporters: ["spec"],

    browsers: ["Chrome"],
  });
};
