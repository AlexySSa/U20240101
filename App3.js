let readline =require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout   
)

rl.question('ingrese un mensaje:', (mensaje)=>{
    const numCaracteres = mensaje.length
    console.log(`el mensaje tiene ${numCaracteres} caracteres`)
    rl.close()
})  