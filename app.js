//const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');



//console.clear();

// console.log('base: yargs', argv.base);

// const [,,arg3 = 'base=2'] = process.argv;
// const [, base] = arg3.split('=');
//console.log(base);
//const base = 4;


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

