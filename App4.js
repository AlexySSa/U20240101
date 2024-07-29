let readline =require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout   
)
rl.question('ingrese un mensaje:', (mensaje)=>{
    const cadena=mensaje.toUpperCase()
    console.log(`la cadena de caracteres en mayusculas es: ${cadena}`)
    process.exit()
})