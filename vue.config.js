const { defineConfig } = require('@vue/cli-service')
const { compilerOptions } = require('@vue/compiler-dom')
module.exports = defineConfig({ 
  transpileDependencies: true,
})

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('ion-')
        }
        return options
      })
  }
}