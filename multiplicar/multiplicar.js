// require
var fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) return reject(`la base ${base} no es un numero`);
        if (!Number(limite)) return reject(`la base ${base} no es un numero`);
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        console.log(data);

    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) return reject(`la base ${base} no es un numero`);

        let data = ''
            //voy a utilizar esta variable para escribir en el archivo lo que hay en ella

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
            // es un callback, si existe un error lo muestra
        });

    })
}


module.exports = {
    crearArchivo,
    listarTabla
}