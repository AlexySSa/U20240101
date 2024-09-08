const readline3 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function enviarCorreo(direccion) {
    return new Promise((resolve, reject) => {
        if (direccion) {
            setTimeout(() => {
                resolve(`Correo enviado a ${direccion}`);
            }, 2000); // Simulando 2 segundos de envío
        } else {
            reject('Dirección de correo no proporcionada');
        }
    });
}

readline3.question('Introduce tu dirección de correo: ', (direccion) => {
    enviarCorreo(direccion)
        .then(mensaje => console.log(mensaje))
        .catch(error => console.log(error))
        .finally(() => readline3.close());
});
