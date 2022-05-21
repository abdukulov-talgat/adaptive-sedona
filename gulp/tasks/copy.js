import gulp from 'gulp';


export default function copy() {
    return gulp.src(app.paths.src.files)
        .pipe(gulp.dest(app.paths.build.files));
}


