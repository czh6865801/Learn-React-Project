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