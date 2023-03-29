/*
) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/
function planoDeSaude (convenio, idade){
    fixo = 100
    idade10 = 80
    idade30 = 50
    idade60 = 95
    idade60acima = 130
    convenio = 0 || 1
    if (convenio = 1){
        if (idade < 10){
            console.log(`Valor a ser pagado é: R$${fixo + idade10}`)
        }
        if (idade >= 10 && idade < 30){
            console.log(`Valor a ser pagado é: R$${fixo + idade30}`)
        }
        if (idade >= 30 && idade < 60) {
            console.log(`Valor a ser pagado é: R$${fixo + idade60}`)
        }
        if (idade >= 60 ){
            console.log(`Valor a ser pagado é: R$${fixo + idade60acima}`)
        }
        
    }
    if (convenio = 0){
        console.log(`O valor a ser pagado é R$${fixo + 120}`)
    }
}
console.log(planoDeSaude(0,1))