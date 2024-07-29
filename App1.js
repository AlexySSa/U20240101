let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('cual es su nombre?', (nombre)=> {
    console.log(`Hola ${nombre}!`)
    process.exit()
})