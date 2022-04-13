const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  /////////// NEEDED TO ADD MANUALLY ////////////
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
  },
  chainWebpack: (config) => {
    config.externals(["vue"]);
  },
});
