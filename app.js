const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).help()
    .command('crear', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).help()
    .argv;

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