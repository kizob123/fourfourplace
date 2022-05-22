"use strict";

var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware;

var express = require('express');

module.exports = function (app) {
  app.use('/register', createProxyMiddleware({
    target: "http://localhost:5500",
    changeOrigin: true
  }));
  app.use('/login', createProxyMiddleware({
    target: "http://localhost:5500",
    changeOrigin: true
  }));
  app.use('/message', createProxyMiddleware({
    target: "http://localhost:5100",
    changeOrigin: true
  }));
  app.use('/sell', createProxyMiddleware({
    target: "http://localhost:5300",
    changeOrigin: true
  }));
};