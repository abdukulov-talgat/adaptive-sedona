import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin, { optipng, svgo } from 'gulp-imagemin';

export default function favicons(cb) {
    gulp.src([
        app.paths.src.favicons.manifest,
        app.paths.src.favicons.ico
    ])
        .pipe(gulp.dest(app.paths.buildFolder));


    return gulp.src([
        app.paths.src.favicons.png,
        app.paths.src.favicons.svg,
    ])
        .pipe(plumber(
            notify.onError({
                title: 'FAVICONS',
                message: 'Error: <%= error.message %>'
            })))
        .pipe(imagemin([
            optipng({ optimizationLevel: 3 }),
            svgo({
                plugins: [
                    { name: 'removeViewBox', active: false }
                ]
            }),
        ]))
        .pipe(gulp.dest(app.paths.buildFolder + '/favicons/'));

}
