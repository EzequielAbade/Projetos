/*
 Faça um algoritmo que calcule o fatorial de um número.
 */

 function fator (fatorando) {
    if (fatorando == 0) {
        return 1
    } else if (fatorando < 0) {
        return -1
    }
    else {
        return (fatorando * fator(fatorando - 1))
    }
}
 
console.log(fator(4))