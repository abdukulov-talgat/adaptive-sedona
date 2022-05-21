import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webp from 'gulp-webp';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';


function images() {
    return gulp.src(app.paths.src.images)
        .pipe(plumber(
            notify.onError({
                title: 'IMAGES',
                message: 'Error: <%= error.message %>'
            })))
        .pipe(webp())
        .pipe(gulp.src(app.paths.src.images))
        .pipe(gulp.src(app.paths.src.svg))
        .pipe(imagemin([
            gifsicle({ interlaced: true }),
            mozjpeg({ quality: 75, progressive: true }),
            optipng({ optimizationLevel: 3 }),
            svgo({
                plugins: [
                    { name: 'removeViewBox', active: false }
                ]
            }),
        ]))
        .pipe(gulp.dest(app.paths.build.images));
}






export default images;
