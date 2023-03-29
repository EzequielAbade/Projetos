function Carro(VelocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // Metodo publico
    this.acelelar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta

        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelelar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelelar()
ferrari.acelelar()
ferrari.acelelar()
console.log(ferrari.getVelocidadeAtual())