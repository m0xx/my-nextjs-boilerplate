const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.css$/,
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        config: {
          path: __dirname + '/'
        }
      }
    });

    // Return the altered config
    return config;
  }
};
