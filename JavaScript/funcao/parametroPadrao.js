// Estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0 ,0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c, d) {
    a = a !== undefined ? a : 1  // nesta linha estou descrevendo, se a for diferente de undefined, então ele irá pegar o valor de a, mas caso não seja ele irá mudar para 1
    b = 1 in arguments ? b : 1 // aqui estou perguntando se existe o segundo elemento na posição 1, se existir pegue, se não existir, defina b como 1
    c = 2 in arguments ? c : 1
    d = isNaN(d) ? 1 : d // nesta estou pergutando que o foi digitado em 'd' é um numero, se não for, defina para 1
    return a + b + c 
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0,0,0))

// valor padrão do ES2015  // mais rapido de se escrever e funcionada da mesma maneira das demais.
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0,0,0))
