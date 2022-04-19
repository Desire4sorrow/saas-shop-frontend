const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4000,
    proxy: 'http://localhost:4964'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/account/' : '/'
})
