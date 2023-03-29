/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function anuidade (mes){
    montante = 0
    capital = 120
    taxa = 0,05
    tempo = mes
     
    switch (mes) {
        case 1: 
            console.log('A sua fatura foi paga sem nenhum juros a ser cobrado!')
            break
        default:
            for (i = 1; i <= mes; i++){
                montante += capital * ((1 + taxa) ** i)

            }
            return 'O valor atualizado é:' + montante.toFixed(2)
    }
}
console.log(anuidade(2))