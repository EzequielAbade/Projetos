const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // .pop Serve para retirar o ultimo indice do array
console.log(pilotos)

pilotos.push('Verstappen') // .push serve para adicionar um indice em ultimo no array
console.log(pilotos)

pilotos.shift() // .shift serve para remover o primeiro indice
console.log(pilotos)

pilotos.unshift('Hamilton') // .unshift serve para adicionar o indice na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // No caso, removeu o indice 3, que era o Massa
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2) // gera um novo array a parti do indice 2
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1, 4) // Ele irá pegar a parti do indice 1 e irá até o indice 4, mas o indice 4 não irá aparecer, somente irá até o indice 3
console.log(algunspilotos2)


