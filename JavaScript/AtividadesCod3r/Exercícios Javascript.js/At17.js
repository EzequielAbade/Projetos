/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.


*/

function aumento (salario, plano) {
    switch (plano){
        case 'A' :
            aumentado = (salario * 10) / 100
            return aumentado + salario 
        case 'B' :
            aumentado1 = (salario * 15) / 100
            return aumentado1 + salario
        case 'C' :
            aumentado2 = (salario * 20) / 100
            return salario + aumentado2
        default :
        return 'Está invalido!'
    }
}

console.log(aumento(1320, 'C'))