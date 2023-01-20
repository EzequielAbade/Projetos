function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {  // do vai fazer que seja pelo menos uma vez executado o blcoo de codigo, quando chega no -1 ele irá verifica o while e irá sair 
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)

} while (opcao != -1)

console.log('Até a proxima!')