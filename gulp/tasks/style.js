import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import replace from 'gulp-replace';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import autorprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import debug from 'gulp-debug';
const sass = gulpSass(dartSass);



function styles() {
    return gulp.src(app.paths.src.style)
        .pipe(plumber(
            notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>'
            })))
        .pipe(gulpif(app.isDev, sourcemaps.init()))
        .pipe(sass())
        .pipe(replace(/@img\//g, '../img/'))
        // .pipe(groupCssMediaQueries())   //Хз юзать или нет, меняет порядок медиа-выражений
        .pipe(autorprefixer())
        .pipe(gulp.dest(app.paths.build.style))
        .pipe(cleanCSS())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulpif(app.isDev, sourcemaps.write()))
        .pipe(gulp.dest(app.paths.build.style))
        .pipe(app.browserSync.stream());
}











export default styles;
