module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.ucome.club",
        changeOrigin: true,
        pathRewrite: { "^/api": "/" }
      }
    }
  }
};
