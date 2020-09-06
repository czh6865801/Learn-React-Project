const {
  override,
  addLessLoader,
  fixBabelImports,
  addWebpackAlias,
} = require("customize-cra")
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

// 这种方式也可以，但不推荐 这种方式是基本没有封装的写法  相当于合并 webpack.config.js(npm run eject产生)
// module.exports = {
//   webpack: function (config, env) {
//     // 设置别名
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': resolve('./src')
//     };
//     // console.log(config)
//     // console.log(env)
//     return config;
//   }
// }
// 这种方式也可以
module.exports = {
  // 设置别名
  webpack: override(
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src")
    }),
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    }),
    // 添加less支持
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#1890FF'
      }
    })
  )
}