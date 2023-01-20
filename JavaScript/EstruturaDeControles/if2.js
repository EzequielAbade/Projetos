function teste1(num) {
    if(num > 7)
    console.log(num) // apenas essa sentença está associado ao bloco if, mesmo sem usar as chaves {}, caso queiracolocar mais sentencas, tem que usar as chaves
    console.log('final') // essa sentença sempre VAI SER USADA pois ela não está relacionada ao bloco IF, no caso do if false, ela aparece = FINAL
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {   // por ter o ponto e virgula praticamente este IF se torna inutil, pois não está sendo utilizado. No caso ';' finaliza uma setença
        console.log(num)
    }
}
teste2(6)
teste2(8)