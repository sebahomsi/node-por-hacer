const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const completado = {
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'elimina un elemento', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}