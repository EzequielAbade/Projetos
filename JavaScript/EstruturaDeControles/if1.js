function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado! ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeiroEufalo(valor) {
    if(valor) {
        console.log('É verdade.. ' + valor)
    }
}

seForVerdadeiroEufalo()
seForVerdadeiroEufalo(null)
seForVerdadeiroEufalo(undefined)
seForVerdadeiroEufalo(NaN)
seForVerdadeiroEufalo('')
seForVerdadeiroEufalo(0)
seForVerdadeiroEufalo(-1)
seForVerdadeiroEufalo(' ')
seForVerdadeiroEufalo('?')
seForVerdadeiroEufalo([])
seForVerdadeiroEufalo([1, 2])
seForVerdadeiroEufalo({})