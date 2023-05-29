const pessoa = {nome: 'João'} // Mesmo sendo uma constante o Objeto pode ser alterado, no caso o nome
pessoa.nome = 'Pedro'
console.log(pessoa)

// vai gerar um erro, pois está alterando o endereço, no caso, está atribuindo em PESSOA não o ''nome''
//pessoa = {nome: 'Ana'}

// Não vai ter mais como alterar, vai ser nome = 'pedro' para sempre
Object.freeze(pessoa)
pessoa.nome = "Abade"
console.log(pessoa)