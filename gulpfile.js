var gulp = require('gulp'),
    rename = require('gulp-rename'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('autoprefixer'),
    rucksack = require('rucksack-css'),
    cssnano = require('cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();


//SERVER

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
});

//CSS


gulp.task('css', function(){
    var plugins = [
        rucksack(),
        autoprefixer({browsers: 'last 2 versions'}),
        cssnano({core:true}) 
    ];

    var sassOptions = {
        outputStyle: 'expanded'
    };

    gulp.src('./src/sass/style.sass')
        .pipe(plumber())
        .pipe(sass(sassOptions))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./public/css/'))
        .pipe(browserSync.stream());
});


//HTML
gulp.task('html', function(){
    gulp.src('./src/views/*.pug')
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
});

//IMAGES
gulp.task('images', function(){
    return gulp.src('./src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images/'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
	.pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
});

//WATCH
gulp.task('watch', function(){
    gulp.watch('./src/sass/**/**/*.sass', ['css']);
    gulp.watch('./src/views/**/**/**/*.pug', ['html']);
    gulp.watch('./src/js/**/**/**/*.js', ['scripts' ]);
    gulp.watch('./src/images/**/**/**/*.*', ['images' ]);
});



//DEFAULT
gulp.task('default', ['html', 'css', 'scripts', 'images','server', 'watch']);
