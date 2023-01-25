const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)  // o Bind server para resolver algo descrito dentro do This
falarDePessoa()                                  // aqui ele está buscando o valor dentro de falar

const falar2 = pessoa.falar
falar2()                                         // aqui ocorre o undefine, justamente por não reconhecer o falar()