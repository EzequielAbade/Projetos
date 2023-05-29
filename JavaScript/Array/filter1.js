const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},

]
console.log(produtos.filter(function(p){  //Filter serve para está buscando em forma de lista, no caso estou separando todos os produtos que o fragil seja true
    return p.fragil == true
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))