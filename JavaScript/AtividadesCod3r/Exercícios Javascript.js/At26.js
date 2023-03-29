/*
Fazer um programa para encontrar todos os pares entre 1 e 100

*/

function pares(){
    cem = 100
    zero = 0
    let paris = []
    while (zero < cem) {
        zero++
        if(zero % 2 === 0){
            paris.push(zero)
        }

    }
    return paris
}

console.log(pares())