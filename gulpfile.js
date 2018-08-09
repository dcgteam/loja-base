var gulp = require( 'gulp' ),
    connect = require( 'gulp-connect' ),
    livereload = require('gulp-livereload'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber    = require('gulp-plumber'),
    rename     = require('gulp-rename'),
    minifycss  = require('gulp-minify-css'),
    uglify     = require('gulp-uglify'),
    notify     = require('gulp-notify'),
    spritesmith = require('gulp.spritesmith'),
    browserSync = require('browser-sync').create();

gulp.task('connect', function() {
    connect.server(
        { 
            livereload: true
        } 
    );
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('./img/sprites/*.png')
        .pipe(spritesmith({
            /* this whole image path is used in css background declarations */
            imgName: './img/sprite.png',
            cssName: 'sprite.css'
        }));
    spriteData.img.pipe(gulp.dest('./img'));
    spriteData.css.pipe(gulp.dest('./css'));
});

/*gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});*/

gulp.task('html', function() {
    gulp.src(['*.html', '*.php'])
        .pipe(livereload());
});

gulp.task('sass', function() {
    gulp
        .src('./src/scss/**/*.scss')
        .pipe( connect.reload() )
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(sass(
                { 
                    errLogToConsole: true,
                    sourceComments:false 
                }
            ))
            //.pipe(rename({suffix: '.min'}))
            //.pipe(minifycss())
        .pipe(sourcemaps.write('./maps'))


        //.pipe( gulp.dest('./css') )
        .pipe( gulp.dest('./css') )
        //.pipe(browserSync.stream())

        /*.pipe(notify(function(file) {
            return 'Arquivo atualizado com sucesso!';
        }))*/
        /*.pipe(through(function () {
            this.emit("error", new Error("Something happend: Error message!"))
        }))*/

        //.pipe(gulp.dest('./css/min'))

        //.pipe(concatCss('bundle.css'))
        //.pipe(gulp.dest('./css'))
        .pipe(livereload());
});

gulp.task('js', function() {
    gulp
        .src('./src/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe( gulp.dest('./js') );
});

gulp.task('watch', function() {
   /* browserSync.init({
        server: {
            baseDir: "."
        }
    });*/
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch(['*.html', '*.php'], ['html']);
});

livereload.listen();

gulp.task('default', ['connect', 'watch']);
//gulp.task('default', ['watch']);