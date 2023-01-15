const nome = 'rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = ` 
Olá
${nome}!`                   // no template tem de ser utilizado `` para reconhecer tudo que está dentro
                            // no caso, utiliza o sifrão do dolar ${} para alguma variavel
console.log(concatenacao, template)

// expressões;;
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
