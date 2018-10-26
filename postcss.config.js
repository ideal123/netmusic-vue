module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 1080,
      viewportHeight: 1920,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines"],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
};
