const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4000,
    proxy: (location.host === 'testvm.plotpad.ru') ? 'http://testvm.plotpad.ru:4964' : 'http://localhost:4964'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/account/' : '/'
})
