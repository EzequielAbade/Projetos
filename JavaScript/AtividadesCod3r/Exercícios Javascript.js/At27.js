/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function crescimento(altura1, taxaDeCrescimento1, altura2, taxaDeCrescimento2){
    tempo = 0
    if (altura1 < altura2) {
       while(altura1 < altura2){
            altura1 += taxaDeCrescimento1
            altura2 += taxaDeCrescimento2
            tempo++
            
       }
       return `A primeira criança irá demora ${tempo} anos para ultrapassar ${altura1}`
    }
    if (altura2 < altura1) {
        while(altura2 < altura1){
            altura2 += taxaDeCrescimento2
            altura1 += taxaDeCrescimento1
            tempo++
       }
      return `A segunda criança irá demora ${tempo} anos para ultrapassar com ${altura2}`  
    }
    else {
        return 'As crinças tem o mesmo tamanho!'
    }


}
console.log(crescimento(180, 2, 150, 1)) 
