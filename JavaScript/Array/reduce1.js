const alunos = [
    { nome: 'Pedro', nota: 8.3, bolsista: false },
    { nome: 'Fernando', nota: 9.2, bolsista: false },
    { nome: 'Abade', nota: 10, bolsista: true },
    { nome: 'Joseu', nota: 4.3, bolsista: false }

]

console.log(alunos.map(a => a.nome))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)