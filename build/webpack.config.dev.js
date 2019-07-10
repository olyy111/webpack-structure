const path = require('path')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
module.exports = function (env, args) {
  return merge(baseConfig, {
    
  })
}