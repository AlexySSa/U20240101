let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('cual es su nombre?', (nombre)=> {
    rl.question('cual es su apellido?', (apellido)=>{
        console.log(`su nombre completo es ${nombre} ${apellido}!`)
        process.exit()
    })
    
})