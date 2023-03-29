/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function eae (numero){
    divisivel = numero % 3
    if (divisivel === 0){
        console.log('true')
    }
    else if (divisivel === 1){
        console.log('false')
    }
}

console.log(eae(16))