import del from 'del';


function clean() {
    return del(app.paths.cleanFolder);
}


export default clean;
