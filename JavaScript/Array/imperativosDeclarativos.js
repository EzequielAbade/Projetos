const alunos = [
    { nome: 'Pedro', nota: 8.3, bolsista: false },
    { nome: 'Fernando', nota: 9.2, bolsista: true },
    { nome: 'Abade', nota: 10, bolsista: false },
    { nome: 'Joseu', nota: 4.3, bolsista: true }

]

// imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)