const nums = [1, 2, 3, 4, 5]

//Map é um For com propósito
let resultado = nums.map(function(elemento){ // No caso, o Map gera um novo Array
    return elemento * 2    
})

console.log(resultado) 

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

