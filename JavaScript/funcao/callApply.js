function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
  
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
globalThis.preco = 0.20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49999, desc: 0.20}

console.log(getPreco.call(carro))

const carro1 = { preco: 50000, desc: 0.20}
console.log(getPreco.apply(carro1))