const readline2 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function validarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve('Edad válida para acceder al contenido');
        } else {
            reject('Edad insuficiente para acceder al contenido');
        }
    });
}

readline2.question('Introduce tu edad: ', (input) => {
    const edad = parseInt(input);
    validarEdad(edad)
        .then(mensaje => console.log(mensaje))
        .catch(error => console.log(error))
        .finally(() => readline2.close());
});
