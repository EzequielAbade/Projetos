function imprimirSomar(a, b) {
    console.log(a + b)
}

imprimirSomar(2, 3)
imprimirSomar(2)
imprimirSomar(2, 10, 4, 5, 6, 7) // vai somar os dois primeiro e ignora o resto
imprimirSomar()


function soma(a, b = 1) { // passando um valor definido para "b"
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // Entede-se que A é 2 e b é o valor definido 1
console.log(soma())
