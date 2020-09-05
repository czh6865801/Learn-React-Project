const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox
} = require("customize-cra")
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  webpack: function (config, env) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve('./src')
    };
    // console.log(config)
    // console.log(env)
    return config;
  }
}
// 这种方式也可以
// module.exports = {
//   webpack: override(
//     addWebpackAlias({
//       ["@"]: path.resolve(__dirname, "src")
//     })
//   )
// }