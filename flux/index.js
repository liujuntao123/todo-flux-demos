var express=require('express')
var webpack=require('webpack')
var WebpackDevServer = require("webpack-dev-server")
var PORT=8008

var webpackConf=require('./webpack.config')
var compiler=webpack(webpackConf)

var server=new WebpackDevServer(compiler,{
  
})
