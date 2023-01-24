 // função em JS é First-Class Object (citizens)
 // ou Higher-Order Function

 // criar de forma literal
 function fun1() {}

 // Armazenar uma função em uma variável
 const fun2 = function () {}

 // Armazenar uma função em um Array
const array =  [function (a, b) {return a + b}, fun1, fun2] 
console.log(array[0](2,3))

// Armazenar uma função em um atributo de objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

// Passa uma função como parametro
function run(fun) {
       fun()                       // aqui ele está chamando a função 'RUN' que está logo abaixo
}

run(function () {console.log('Executando...')})  // Essa é a função que está sendo buscada.

// Uma função pode retorna/conter uma outra função
function soma(a, b) {
       return function (c){
              console.log(a + b + c)
       }
}

soma(2, 3)(4)

const cincoMais = soma(2, 3)
cincoMais(6)