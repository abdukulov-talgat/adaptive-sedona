import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

const paths = {
    srcFolder: srcFolder,
    buildFolder: buildFolder,
    cleanFolder: buildFolder,
    rootFolder: rootFolder,
    src: {
        files: `${srcFolder}/files/**/*.*`,
        fonts: `${srcFolder}/fonts/`,
        html: `${srcFolder}/pug/pages/*.pug`, // Все страницы должны лежать в корне папки html
        style: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: [
            `${srcFolder}/img/**/*.svg`,
            `!${srcFolder}/img/icons/**`
        ],
        sprite: `${srcFolder}/img/icons/**/*.svg`,
        favicons: [ // только *.manifest и *.ico которые помещаются в корень проекта, остальные фавиконки в папке img. Т.к. оптимизация
             `${srcFolder}/favicons/*.webmanifest`,
             `${srcFolder}/favicons/*.ico`,
        ],
    },
    build: {
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
        html: `${buildFolder}/`,
        style: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/pug/**/*.pug`,
        style: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: [
            `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
            `!${srcFolder}/img/icons/**`
        ],
        sprite: `${srcFolder}/img/icons/**/*.svg`
    }
};




export default paths;
