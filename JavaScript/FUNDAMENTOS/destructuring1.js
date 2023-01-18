const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 4040
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome = false, bemHumorada = false} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)