// Armazenando função em variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
 
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {  // no caso a seta simboliza a function
    return a + b
}

console.log(soma(2, 3))

// Retorno implicito
const subtracao = (a, b) => a - b // equilave ao mesmo caso do arrow em uma variavel, porem demonstra que a minha function vai ter somente uma linha de codigo

console.log(subtracao(2, 3))