const {createProxyMiddleware} = require('http-proxy-middleware')
const express = require('express')
module.exports = function(app){
    app.use(
        '/login/register',
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true
        })
        
        );
        app.use(
            '/login/login',
            createProxyMiddleware({
                target: "http://localhost:5000",
                changeOrigin: true
            })

        );
        app.use(
            '/message',
            createProxyMiddleware({
                target: "http://localhost:5100",
                changeOrigin: true
            })

        );
        app.use(
            '/sell',
            createProxyMiddleware({
                target: "http://localhost:5300",
                changeOrigin: true
            })

        );
    
}
