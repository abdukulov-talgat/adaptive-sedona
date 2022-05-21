import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webpack from 'webpack-stream';
import replace from 'gulp-replace';


function js() {
    return gulp.src(app.paths.src.js)
        .pipe(plumber(
            notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>'
            })))
        .pipe(webpack({
            mode: app.isDev ? 'development' : 'production',
            devtool: 'source-map',
            output: {
                filename: 'app.min.js',
            },
            module: {
                rules: [
                    {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
                    },
                ],
            }
        }))
        .pipe(replace(/@img\//g, '../img/'))
        .pipe(gulp.dest(app.paths.build.js))
        .pipe(app.browserSync.stream());
}



export default js;
