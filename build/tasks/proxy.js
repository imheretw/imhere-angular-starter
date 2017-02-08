/*jshint unused:false */

/***************

   This file allow to configure a proxy system plugged into BrowserSync
   in order to redirect backend requests while still serving and watching
   files from the web project

   IMPORTANT: The proxy is disabled by default.

   If you want to enable it, watch at the configuration options and finally
   change the `module.exports` at the end of the file

 ***************/

'use strict';

var proxyMiddleware = require('http-proxy-middleware');

/*
* Location of your backend server
*
* var context = '/api';
* var proxyTarget = 'http://dep.fetnet.net';
* 如果網址有 /api 則會往 http://dep.fetnet.net/api 送 http
*/

/*
* This is where you activate or not your proxy.
*
* The first line activate if and the second one ignored it
*/

module.exports = function() {
  var proxyTarget = 'http://localhost:5000';
  var proxies = [];

  return {
    middleware: middleware
  };

  function middleware() {
    if (!proxies.length) {
      registerProxies();
    }

    return proxies;
  }

  function registerProxies() {
    proxies.push(createMiddleware('/api'));
    proxies.push(createMiddleware('/attachments'));
  }

  function createMiddleware(path) {
    return proxyMiddleware(path, {
      target: proxyTarget
    });
  }
};
