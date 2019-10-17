var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var inject = require('gulp-inject');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var image = require('gulp-image');
var sourcemaps = require('gulp-sourcemaps');
var obsoleteImages = require('gulp-font-awesome-icons');

sass.compiler = require('node-sass');
//leadPageRepertoir
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
	})
});

//convert scss to css
gulp.task('css', function(){
	return gulp.src('src/scss/*.scss')
	    .pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'));
});

//injection css to html
gulp.task('html', ['css'], function(){
	var injectFiles = gulp.src(['dist/css/*.css','dist/js/*.js']);

	var injectOptions = {
		addRootSlash: false,
		ignorePath: ['dist', '']
	};

	return gulp.src('src/*.html')
		.pipe(inject(injectFiles, injectOptions))
		.pipe(gulp.dest('dist/'));
});

//testLoad
gulp.task('watch', ['browserSync','html','css','js','image'], function (){
	gulp.watch('src/scss/*.scss', ['css']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/*.html', ['html']);
	gulp.watch('src/*.*', browserSync.reload);
});

//optimizing js
gulp.task('js', function(){
	 gulp.src('src/js/*.js')
	 .pipe(concat('script.js'))
	 .pipe(uglify())
	 .pipe(gulp.dest('dist/js/'));
});

//optimizing css
/*gulp.task('css', function(){
	 gulp.src('src/css/*.css')
	 .pipe(sourcemaps.init())
	 .pipe(concat('styles.min.css'))
	 .pipe(minify())
	 .pipe(sourcemaps.write())
	 .pipe(gulp.dest('dist/css/'));


});*/

gulp.task('image', function () {
	gulp.src('src/img/**/*')
		.pipe(image())
		.pipe(gulp.dest('dist/img'));
});

gulp.task('font', function () {
	gulp.src('src/font/*')
		.pipe(gulp.dest('dist/font'));
});

gulp.task('default',['html','js','css','image','font'],function(){
});
