const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4000,
    proxy: (process.env.NODE_ENV === 'production') ? 'http://testvm.plotpad.ru:4964' : 'http://localhost:9965'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/account/' : '/'
})
