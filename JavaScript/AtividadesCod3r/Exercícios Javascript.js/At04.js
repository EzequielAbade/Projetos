//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function dividir(dividendo, divisor) {
    divisao = dividendo / divisor
    resto =  dividendo % divisor
    return 'A divisão é: ' + divisao + '\nResto: ' + resto 
}

console.log(dividir(10, 3))