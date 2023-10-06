const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    // 关闭 webpack 的性能提示
    config.performance.set('hints', false)
  },
  lintOnSave: process.env.NODE_ENV === 'production' ? 'error' : 'warning'
}

