class Pessoa {
    constructor(nome) {
        this.nome = nome

    }

    falar() {
        console.log(`Meu nome é ${this.nome}` )
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarpessoa = nome => {
    return {
        falar: () => console.log(`Meui nome é ${nome}`)
    }
}

const p2 = criarpessoa('Hitalo')
p2.falar()