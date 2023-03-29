/*
 Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
/* 
1 domingo
2 segunda
3 terça
4 quarta
5 quinta
6 sexta
7 sabado
8 domingo
*/
function dia_da_semana(data) {
    switch(data){
    case 1: 
    case 8: 
    case 15: 
    case 22: 
    case 29:
       return console.log('domingo')
    case 2: case 9: case 16: case 23: case 30:
       return console.log('Segunda')
    case 3: case 10: case 17: case 24: case 31: 
       return console.log('terça')
    case 4: case 11: case 18: case 25:
        return console.log('Quarta')
    case 5: case 12: case 19: case 26:
        return console.log('Quinta')
    case 6: case 13: case 20: case 27:
        return consoleg.log('Sexta')
    case 7: case 14: case 21: case 28: 
        return console.log('Sabado')

    }
   

}

console.log(dia_da_semana(25))