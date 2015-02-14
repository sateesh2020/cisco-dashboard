var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plugins = require('gulp-load-plugins')();


gulp.task('default',['watch']);

// Minify jQuery Plugins: Run manually with: "gulp min-vendor"
gulp.task('min-vendor',function(){
        return gulp.src('client/src/scripts/vendor/**/*.js')
                    .pipe(plugins.uglify())
                    .pipe(plugins.concat('jquery.plugins.min.js'))
                    .pipe(gulp.dest('client/build'));
});

// Minify Custom JS: Run manually with: "gulp min-custom"
gulp.task('min-custom',function(){
        return gulp.src('client/src/scripts/custom/*js')
                    .pipe(plugins.jshint())
                    .pipe(plugins.jshint.reporter('jshint-stylish'))
                    .pipe(plugins.uglify())
                    .pipe(plugins.concat('scripts.min.js'))
                    .pipe(plugins.dest('client/build'));
});

// Less to CSS: Run manually with: "gulp compile-less"
gulp.task('compile-less',function(){
        return gulp.src('client/src/less/*.less')
                    .pipe(plugins.plumber())
                    .pipe(plugins.less())
                    .on('error',function(err){
                        gutil.log(err);
                        this.emit('end');
                    })
                    .pipe(plugins.autoprefixer(
                        {
                            browsers: [
                                '> 1%',
                                'last 2 versions',
                                'firefox >= 4',
                                'safari 7',
                                'safari 8',
                                'IE 8',
                                'IE 9',
                                'IE 10',
                                'IE 11'
                            ],
                            cascade: false
                        }
                    ))
                    .pipe(plugins.cssmin())
                    .pipe(gulp.dest('client/build'))
                    .on('error',gutil.log);
});

            
gulp.task('watch',function(){
        gulp.watch('client/src/scripts/vendor/**/*.js', ['min-vendor']);
        gulp.watch('client/src/scripts/custom/*js', ['min-custom']);
        gulp.watch('client/src/less/*.less', ['compile-less']); 
});