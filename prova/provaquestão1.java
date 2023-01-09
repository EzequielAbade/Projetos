package prova;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class provaquestão1 {

    public static void main(String[] args) throws Exception{
        Scanner leitor = new Scanner(System.in);
        System.out.println("Informe as linhas: ");
        int linhas = leitor.nextInt();
        System.out.println("Informe as colunas: ");
        int colunas = leitor.nextInt();

        System.out.println();
        int [][] matriz = criarMatriz(linhas,colunas);
        mostraMatriz(matriz);
        criandoArquivo("Matriz.txt");
        String matriztexto = matrizParaString(matriz);
        textoParaArquivo(matriztexto, "Matriz.txt");

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

    public static void mostraMatriz(int[][] matriz){

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + "|" );
            }
        }
    }

    public static void criandoArquivo(String caminho) throws IOException{
        File arquivo = new File(caminho);
    
        
            if(arquivo.createNewFile() == true){
                System.out.println();
                System.out.println("Arquivo criado");
            }
            else {
                System.out.println();
                System.out.println("Erro, arquivo não criado.");
            }

        }
    

    public static String matrizParaString(int[][] matriz) {
        String saida = "[";
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                saida += matriz[i][j] + ",";
                
            }
            
        } 
        return saida + matriz[matriz.length - 1] + "]";
    }

    public static Void textoParaArquivo(String texto, String arquivo) throws IOException{
        
     
            FileWriter file = new FileWriter(arquivo);
            BufferedWriter escritor = new BufferedWriter(file);
            escritor.append(texto);
            escritor.close();
            file.close();
    
        return null;
    }
}
