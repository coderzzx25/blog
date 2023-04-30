/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const cracoLess = require('craco-less')
const pxToViewport = require('postcss-px-to-viewport-8-plugin')

const resolve = (pathname) => path.resolve(__dirname, pathname)

const vw = pxToViewport({
  viewportWidth: 1920
})

module.exports = {
  plugins: [
    {
      plugin: cracoLess
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [vw]
        }
      }
    }
  }
}
