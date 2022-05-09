const {createProxyMiddleware} = require('http-proxy-middleware')
const express = require('express')
module.exports = function(app){
    app.use(
        '/post',
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true
        })
        
        )
    
}