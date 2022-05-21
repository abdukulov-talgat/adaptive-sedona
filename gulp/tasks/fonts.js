import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';



// Если делать все через один таск, то выходит не очень оптимизировано,
// т.к. глобы из разных src допускают дубликаты
function convertTtf2Woff() {
    return gulp.src(`${app.paths.src.fonts}/**/*.ttf`)
        .pipe(plumber(notify.onError({
            title: 'FONTS',
            message: '<%= error.message %>'
        })))
        .pipe(ttf2woff())
        .pipe(gulp.dest(app.paths.build.fonts));
}

function convertTtf2Woff2() {
    return gulp.src(`${app.paths.src.fonts}/**/*.ttf`)
        .pipe(plumber(notify.onError({
            title: 'FONTS',
            message: '<%= error.message %>'
        })))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(app.paths.build.fonts));
}

function copyWoffWoff2() {
    return gulp.src(`${app.paths.src.fonts}/**/*.{woff,woff2}`)
        .pipe(gulp.dest(app.paths.build.fonts));
}




const fonts = gulp.parallel(convertTtf2Woff, convertTtf2Woff2, copyWoffWoff2)

export default fonts;
