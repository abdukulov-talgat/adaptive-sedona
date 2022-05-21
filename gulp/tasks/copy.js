import gulp from 'gulp';


function copy() {
    return gulp.src(app.paths.src.files)
        .pipe(gulp.dest(app.paths.build.files));
}

function favicons(){
    return gulp.src(app.paths.src.favicons)
        .pipe(gulp.dest(app.paths.buildFolder));
}




export default gulp.parallel(copy, favicons);
