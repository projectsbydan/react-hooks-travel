const { src, dest, task, parallel, watch, series } = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const webpackConfig = require("./webpack.config");
const webpack = require("webpack");
const path = require("path");
const log = require("fancy-log");
const browserSync = require("browser-sync").create();

const css = done => {
  src("./styles.sass")
    .pipe(plumber())
    .pipe(
      sass({
        style: "compressed",
      })
    )
    .pipe(dest(path.join(__dirname, "../WebService/WebService/wwwroot/")));
  done();
};

const webPackCallback = (_error, stats, callback) => {
  const message = stats.toString();
  if (!stats.hasErrors()) {
    log(message);
    callback();
  } else {
    callback(message);
  }
};

const jsWatch = done => {
  webpack(
    {
      ...webpackConfig,
      devtool: "inline-source-map",
      mode: "development",
      watch: true,
    },
    (error, stats) => webPackCallback(error, stats, done)
  );
};

const jsRelease = done => {
  webpack({ ...webpackConfig, devtool: false, mode: "production" }, (error, stats) => webPackCallback(error, stats, done));
};

historyApiFallback = require("connect-history-api-fallback");
const watcher = () => {
  browserSync.init({
    server: {
      baseDir: path.join(__dirname, "../WebService/WebService/wwwroot/"),
      middleware: [historyApiFallback()],
    },
    notify: false,
  });

  watch(["./Components/**/*.sass", "./Components/**/**/*.sass"], series(css));
  watch(["../WebService/WebService/wwwroot/code.js", "../WebService/WebService/wwwroot/styles.css"]).on("change", browserSync.reload);
};

task("default", parallel(css, jsRelease));
task("watch", parallel(watcher, jsWatch));
