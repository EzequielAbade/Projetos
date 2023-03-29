/*
O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function lanchonete (item, quantidade) {

    switch (item) {
        case 100:{
        total1 = quantidade * 3
         return console.log(`Cachorro quente no valor R$ ${total1}`)
        }
        case 200:{
            total2 = quantidade * 4
            return console.log(`Hamburguer Simples no valor R$ ${total2}`)
        }
        case 300:{
            total3 = quantidade * 5,50
        } return console.log(`Cheesebuguer no valor R$ ${total3}`)

        case 400:{
            total4 = quantidade * 7,50
            return console.log(`Bauru no valor R$ ${total4}`)
        }
        case 500:{
            total5 = quantidade * 3,50
            return console.log(`Refrigerante no valor R$ ${total5}`)
        }
        case 600: {
            total6 = quantidade * 2,80
            return console.log(`Suco no valor R$ ${total6}`)
        }
    }
}
console.log(lanchonete(600, 10))