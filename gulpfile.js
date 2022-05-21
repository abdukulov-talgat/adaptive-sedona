import gulp from 'gulp';
import browserSync from 'browser-sync';
import paths from './gulp/config/paths.js';
import clean from './gulp/tasks/clean.js';
import copy from './gulp/tasks/copy.js';
import fonts from './gulp/tasks/fonts.js';
import html from './gulp/tasks/html.js';
import style from './gulp/tasks/style.js';
import server from './gulp/tasks/server.js';
import images from './gulp/tasks/images.js';
import svgSprite from './gulp/tasks/svgSprite.js';
import js from './gulp/tasks/js.js';
import deployPages from './gulp/tasks/deploy.js';
import favicons from './gulp/tasks/favicons.js';

global.app = {
    browserSync: browserSync.create(),
    isDev: !process.argv.includes('--build'),
    isBuild: process.argv.includes('--build'),
    paths: paths,
};



function watch(cb) {
    gulp.watch(paths.watch.files, copy);
    gulp.watch(paths.watch.html, gulp.series(html, reload));
    gulp.watch(paths.watch.style, style);
    gulp.watch(paths.watch.images, images);
    gulp.watch(paths.watch.sprite, svgSprite);
    gulp.watch(paths.watch.js, js);

    cb();
}

function reload(cb) {
    app.browserSync.reload();
    cb();
}



const mainTasks = gulp.parallel(
    copy,
    fonts,
    html,
    style,
    images,
    svgSprite,
    js,
    favicons,
);

export const build = gulp.series(clean, mainTasks);
export const serve = gulp.series(build, server, watch);
export const deploy = deployPages;

export default serve;
