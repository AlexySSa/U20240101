const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })

function maximoDeTres(n1, n2, n3){
    return Math.max(n1, n2, n3)
}

rl.question('ingresa el primer numero: ', (respuesta1)=>{
    rl.question('ingresa el segundo numero: ', (respuesta2)=>{
        rl.question('ingresa el tercer numero: ', (respuesta3)=>{
            const n1 = parseInt(respuesta1)
            const n2 = parseInt(respuesta2)
            const n3 = parseInt(respuesta3)

            const maximo = maximoDeTres(n1, n2, n3)
            console.log(`el numero mayor entre ${n1} ${n2} ${n3} el maximo de los tres numeros es: ${maximo}`)
        })
    })
})