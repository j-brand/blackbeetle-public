module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/assets/style/scss/_fonts.scss";
        @import "~@/assets/style/scss/_custom.scss";
        `,
      },
    },
  },
};
