module.exports = {
  // baseUrl:
  //   process.env.NODE_ENV === "production" ? "https://s0.ucome.club" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.104.247.173:3001/",
        changeOrigin: true,
        pathRewrite: { "^/api": "/" }
      }
    }
  }
};
