const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./confi/yargs')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo + ' creado'))
            .catch(err => console.log(err))
        break;

    default:
        console.log('comando no reconocido');
        break;
}






// console.log(argv.limite);