//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function calculos (valor1, valor2) {
    
    return "A soma é: " + (valor1 + valor2) + '\nDivisão: ' + (valor1 / valor2) + '\nMultiplicação: ' + (valor1 * valor2) + '\nSubtração: ' + (valor1 - valor2)
}

console.log(calculos(10, 10))