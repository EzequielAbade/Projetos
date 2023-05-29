function aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula1('BEM VINDO', 123)
const aula2 = new aula2('ATÉ BREVE', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj._proto_ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'bem vindo', 123)
const aula4 = novo(aula, 'Até breve', 454)
console.log(aula3, aula4)