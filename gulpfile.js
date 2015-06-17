
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpackConfig');

var livereload = require('gulp-livereload');

//console.log('///////////**************',webpackConfig);
gulp.task('default', ['webpack', 'watch']);

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(['js/**/*.js', '!js/bundle.js'], ['webpack']);
});

gulp.task('webpack', function() {
	return gulp.src('./js/main.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('.'));
});
