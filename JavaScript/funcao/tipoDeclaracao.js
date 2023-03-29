console.log(soma(3, 4)) // O javascript vai reconhecer pois a fuction são carregadas primeira
// as demais funcoes só vão poder ser reconhecidas se forem declaradas depois das respectivas funcoes
// fuction declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
}

// namd function expression
const mult = function mult(x, y){
    return x * y
}