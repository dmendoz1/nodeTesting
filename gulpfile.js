var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var sass = require("gulp-ruby-sass");
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");
var csslint = require("gulp-csslint");

gulp.task("default", function() {
	console.log("gulp");
});



//this task checks for errors
gulp.task("jshint", function() {
	gulp.src(["./src/js/**/*.js"])
		.pipe(jshint())
		.pipe(jshint.reporter("jshint-stylish"));   //reporter controls what gets printed out to the command line / how it looks
});

//this task compiles js for node
gulp.task("compile:js", ["jshint"], function() {
	var bundle = browserify("./src/js/main.js").bundle();
	bundle
		.pipe(source("main.js"))
		.pipe(gulp.dest("./public/assets/js"))
});

//this task compiles sass for css
gulp.task('compile:css', () =>
	sass('./src/scss/*.scss')
		.on('error', sass.logError)
		.pipe(csslint())
		.pipe(csslint.reporter())
		.pipe(gulp.dest('./public/assets/css/'))
);


//this task allows your changes to be updated in real time
gulp.task("watch", ["compile:js", "compile:css"], function() {
	gulp.watch(["./src/js/**/*.js"], ["compile:js"]);
	gulp.watch(["./src/scss/**/*.scss"], ["compile:css"]);
});