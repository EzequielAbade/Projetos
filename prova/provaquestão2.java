package prova;

import java.util.Random;
import java.util.Scanner;

public class provaquestão2 {
    public static void main(String[] args) throws Exception{
        Scanner leitor = new Scanner(System.in);
        System.out.println("Informe as linhas: ");
        int linhas = leitor.nextInt();
        System.out.println("Informe as colunas: ");
        int colunas = leitor.nextInt();

        System.out.println("Informe as linhas da segunda matriz: ");
        int linhas1 = leitor.nextInt();
        System.out.println("Informe as colunas da segunda matriz: ");
        int colunas1 = leitor.nextInt();

        
         
        int [][] matriz = criarMatriz(linhas, colunas);
        mostrarMatriz(matriz);

        System.out.println();

        int [][] matriz1 = criarMatriz2(linhas1, colunas1);
        mostrarMatriz(matriz1);

        System.out.println();

        if(matriz == matriz1){
            System.out.println("Matrizes iguais");
        } else {
            System.out.println("matrizes diferentes");
        }
        System.out.println();
        if(linhas == linhas1 && colunas == colunas1){
            System.out.println("Tamanhos iguais");
        } else{
            System.out.println("Tamanhos diferentes");
        }
        leitor.close();
    } 

public static int aleatorio(int min, int max){
    return new Random().nextInt(max - min + 1) + min;
}

public static int [][] criarMatriz(int linhas, int colunas){
    int [][] matriz = new int[linhas][colunas];
    
    for(int i = 0; i < linhas; i++){
        for (int j = 0; j < colunas; j++) {
            matriz [i][j] = aleatorio(0, 9);
            
        }
    }
    return matriz;
}

public static int [][] criarMatriz2(int linhas1, int colunas1){
    int [][] matriz1 = new int[linhas1][colunas1];
    
    for(int i = 0; i < linhas1; i++){
        for (int j = 0; j < colunas1; j++) {
            matriz1 [i][j] = aleatorio(0, 9);
            
        }
    }
    return matriz1;
}
public static void mostrarMatriz(int [][] matriz){
    for (int i = 0; i < matriz.length; i++) {
        for (int j = 0; j < matriz[i].length; j++) {
            System.out.print(matriz[i][j] + "|");
            
        }
        System.out.println();
    }
}
}