// const compose = require("next-compose");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

const compose = (...plugins) => config =>
  plugins.reduceRight(
    (config, [plugin, options]) =>
      plugin({
        ...config,
        ...options
      }),
    config
  );

module.exports = compose(
  [withCSS, { cssModules: true }],
  [withSass]
)({
  webpack: (config, options) => {
    config.node = {
      fs: "empty"
    };
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    });
    return config;
  }
});
