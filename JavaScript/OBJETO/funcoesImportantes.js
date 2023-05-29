const pessoa = {
    nome: 'Rebeca',
    iddade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Este vai pegar apenas as chaves, no caso : Nome, idade, peso
console.log(Object.values(pessoa)) // Este vai pegar os valores, no caso: Rebeca, 2, 13
console.log(Object.entries(pessoa)) // Este vai pegar tanto as chaves quanto os valores, no caso: Nome: rebeca, idade: 2, peso: 13
console.log(Object.defineProperty(pessoa, 'dataNascimento',{    //Este consegue criar uma propriedade, no caso fizemos a data de nascimento
    enumerable: true,   //Declara se quando usarmos a .key ele será declarado
    writable: false,    // Declara se ele pode ser rescrito, no caso, estando em false, a data de nascimento não pode ser alterada
    value: '01/01/2019' // defini o valor da minha propriedade
}))

const dest = {a: 1}
const o1 = { b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Assing irá concatenar as constantes o1 e o2 em dest obs que o a foi alterado em o2

