/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/
function jurosimples (inicial, juros, aplicação) {
    montante = inicial * juros * aplicação
    return montante;
}
function juroscomposto (inicial, juros, aplicação) {
    juroscomposto = inicial * (1 + juros) **  aplicação
    return juroscomposto
}

console.log(jurosimples(100, 0.1, 1));
console.log(juroscomposto(100, 0.1, 1));