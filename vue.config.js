const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: process.env.VUE_APP_DEV_SERVER_PORT || 4000,
    proxy: process.env.VUE_APP_DEV_SERVER_PROXY || 'http://localhost:9965' //(process.env.NODE_ENV === 'production') ? 'http://testvm.plotpad.ru:4964' : 'http://localhost:9965'
  },
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/' // process.env.NODE_ENV === 'production' ? '/account/' : '/account/'
})
