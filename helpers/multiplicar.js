const fs = require('fs'); //ya viene en node por lo que no es una dependencia
const colors = require('colors');

// const crearArchivo = (base) => {
//     console.log('=============');
//     // console.log(`Tabla del ${base}`);
//     console.log('Tabla del:',base);
//     console.log('=============');
//     let salida = '';

//     for (let i = 1; i <= 10; i++) {
//         salida += `${base} x ${i} = ${base * i}\n`;
//     }
//     console.log(salida);

//     fs.writeFileSync( `tabla-${base}.txt`, salida);

//     console.log(`tabla-${base}.txt creada`);
// }
// const crearArchivo = (base, callback) => {
//     return new Promise((resolve, reject) => {
//         console.log('=============');
//         // console.log(`Tabla del ${base}`);
//         console.log('Tabla del:',base);
//         console.log('=============');
//         let salida = '';

//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
//         console.log(salida);

//         fs.writeFileSync( `tabla-${base}.txt`, salida);

//         resolve(`tabla-${base}.txt`);
//         reject(`Error al crear la tabla con base: ${base}`);
//     })
// }

const crearArchivo = async(base, listar, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.red} ${base * i}\n`;
        }
        if(listar){
            console.log('============='.green);
            console.log('Tabla del:'.green, colors.blue(base));   // console.log(`Tabla del ${base}`);
            console.log('============='.green);
            console.log(consola);
        }
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}