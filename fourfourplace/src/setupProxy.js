const proxy = require('http-proxy-middleware')
const express = require('express')
module.exports = function(app){
    app.use(proxy(
        '/api',
        {
            target: "http://localhost:3200",
            changeOrigin:true
        })
    )
}