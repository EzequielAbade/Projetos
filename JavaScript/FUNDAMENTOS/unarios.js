let num1 = 1
let num2 = 2
num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // ele vai verifica tudo primeiro e vai verifica que é verdadeiro, depois disso que ele vai ver a decrementação
console.log(num1 === num2) // aqui como não tem nada acrescentando ou decremetando, vai dar false