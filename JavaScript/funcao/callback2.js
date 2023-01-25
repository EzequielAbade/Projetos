const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notaBaixas = []
for (let i in notas) {
    if(notas[i] < 7){
        notaBaixas.push(notas[i])
    }
}

console.log(notaBaixas)

// com callback
notasBaixas2 = notas.filter(function (nota){  // o filter irá colocar tudo que é "TRUE" no array, no caso, ele irá filtrar todos no array(Notas) os valores que são maiores que 7
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7) // Usando o Arrowfunction se torna menor o código, dessa maneira ficando mais visivel, porém terá de chamar a constante para usar a function
console.log(notasBaixas3)