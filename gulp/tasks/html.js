import gulp from 'gulp';
// import fileinclude from 'gulp-file-include';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import version from 'gulp-version-number';
import pug from 'gulp-pug';



function html() {
    return gulp.src(app.paths.src.html)
        .pipe(plumber(
            notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message%>'
            })))
        // .pipe(fileinclude({
        //     context: {
        //         isDev: app.isDev
        //     }
        // }))
        .pipe(pug())
        .pipe(replace(/@img\//g, 'img/'))
        // .pipe(replace(
        //     /(@scss\/).*(\.scss)/g,
        //     function replacer(match, p1, p2) {
        //         return match.replace(p1, 'css/').replace(p2, '.css');
        //     }))
        // .pipe(replace(/@js\//g, 'js/'))
        .pipe(version({
            value: "%DT%",
            append: {
                key: '_v',
                cover: 0,
                to: [
                    'js',
                    'css'
                ],
            },
            // output: {
            //     file: 'gulp/version.json',
            // }
        }))
        .pipe(gulp.dest(app.paths.build.html))
    // .pipe(app.browserSync.reload());
}





export default html;
