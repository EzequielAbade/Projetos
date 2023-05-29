const alunos = [
    { nome: 'Pedro', nota: 8.3, bolsista: false },
    { nome: 'Fernando', nota: 9.2, bolsista: true },
    { nome: 'Abade', nota: 10, bolsista: false },
    { nome: 'Joseu', nota: 4.3, bolsista: true }

]

// Desafio 1 : Todos os alunos são bolsistas?

const todosbolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosbolsista))

// Desafio 2 : algum aluno é bolsista?

const algumbolsista = (resultado1, bolsista1) => resultado1 || bolsista1
console.log(alunos.map(a => a.bolsista).reduce(algumbolsista))
