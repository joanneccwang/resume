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
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Joanne Wang',
    },
  },
};
