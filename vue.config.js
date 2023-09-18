const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .loader("ts-loader")
      .tap((opts) => {
        opts.appendTsSuffixTo = [/\.vue$/];
        return opts;
      });
  },
});
