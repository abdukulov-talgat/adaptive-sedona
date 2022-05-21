import gulp from 'gulp';
// import ghPages from 'gulp-gh-pages';
import ghpages from 'gh-pages';




// function deploy() {
//     return gulp.src('./dist/**/*')
//         .pipe(ghPages());
// };


function deploy(done) {
    ghpages.publish('./dist/', function(err) { console.log(err)});
    done();
}

export default deploy;
