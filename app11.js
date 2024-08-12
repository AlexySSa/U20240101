const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })

function celsiusF(celsius){
    return (celsius * 9/5) + 32;
}

rl.question('ingrese la temperatura en grados celsius', (respuesta) =>{
    const celsius = parseFloat(respuesta)
    const fahrenheit = celsiusF(celsius)
    console.log(`${celsius} grados celsius son ${fahrenheit} grados fahrenheit`)
    rl.close()
})
    
