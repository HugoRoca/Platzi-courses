const gulp = require("gulp");
const server = require("gulp-server-livereload");

gulp.task("build", function (cb) {
  console.log(`building...`);
  setTimeout(cb, 1200);
});

gulp.task("serve", function (cb) {
  gulp.src("www").pipe(server({ livereload: false, open: true }));
});

gulp.task("default", gulp.series("build", "serve"));
