console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Abade', 'Abadim', 'Abadao']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'ABADAAAAA'
aprovados.push('abadu')
console.log(aprovados.length)

aprovados[9] = 'abadeu'
console.log(aprovados.length)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ('Bia', 'Carlos', 'Ana')
aprovados.splice(1,2,'elemento1', 'elemento2')
console.log(aprovados)

