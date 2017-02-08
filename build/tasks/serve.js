var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

var middleware = require('./proxy')().middleware;

gulp.task('serve', ['watch'], function (done) {
  var server = {
    baseDir: ['.'],
  };

  if (middleware().length > 0) {
    server.middleware = middleware();
  }

  browserSync({
    open: false,
    port: 3000,
    server: server
  }, done);
});
