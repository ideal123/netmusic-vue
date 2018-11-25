module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.westo.club:3001/",
        changeOrigin: true,
        pathRewrite: { "^/api": "/" }
      }
    }
  }
};
