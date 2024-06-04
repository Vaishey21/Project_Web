// webpack.config.js

module.exports = {
    // Other webpack configurations...
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
      },
    },
  };
  