/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const cracoLess = require('craco-less')

const resolve = (pathname) => path.resolve(__dirname, pathname)

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
  }
}
