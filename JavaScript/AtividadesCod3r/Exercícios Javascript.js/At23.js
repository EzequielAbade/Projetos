/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/
function media (codigo){
    if (codigo){
        nota1 = 5
        nota2 = 5
        nota3 = 5
        mediaponderada = (nota1 + nota2 + nota3) / 3
        while(mediaponderada >= 0){
            if (mediaponderada >= 5 ){
                return `O Aluno ${codigo} teve a nota ${mediaponderada} e está APROVADO!` 
            }
            else return 'Aluno está reprovado'
        }
         
    }
}
    

console.log(media(2))