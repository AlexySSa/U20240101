const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarNumeroEsCinco(numero) {
    return new Promise((resolve, reject) => {
        if (numero === 5) {
            resolve('El número es 5');
        } else {
            reject('El número no es 5');
        }
    });
}

readline.question('Introduce un número: ', (input) => {
    const numero = parseInt(input);
    verificarNumeroEsCinco(numero)
        .then(mensaje => console.log(mensaje))
        .catch(error => console.log(error))
        .finally(() => readline.close());
});
