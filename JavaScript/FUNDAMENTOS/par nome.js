const saudacao = 'opa'  // contexto léxico

function exec() {
    const saudacao = 'Falaaa' // outro contexto léxico
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123

    }
}

console.log(saudacao)
console.log(exec)
console.log(cliente)