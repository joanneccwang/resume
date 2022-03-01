module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/index.scss";
        `,
      },
    },
  },
  devServer: {
    compress: true,
    disableHostCheck: true, // webpack4.0 open hot update
  },
};
