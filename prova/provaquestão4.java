package prova;

import java.util.ArrayList;
import java.util.List;

public class provaquestão4 {
    public static void main(String[] args) {

        int[][] matriz = new int[][] {
                { 3, 2, 3, 4 },
                { 3, 4, 4, 8 },
                { 6, 7, 7, 9 } };

        List<Integer> repetidos = new ArrayList<Integer>();

       
        for (int i = 0; i < matriz.length; i++) {
            proximoElemento: for (int j = 0; j < matriz[i].length; j++) {
                
               
                if (repetidos.contains(matriz[i][j]))
                    continue proximoElemento;

                
                for (int i2 = i; i2 < matriz.length; i2++) {
                    for (int j2 = 0; j2 < matriz[i2].length; j2++) {
                       
                        if (i == i2 && j == j2)
                            break;
                      
                        if (matriz[i][j] == matriz[i2][j2]) {
                            repetidos.add(matriz[i][j]);
                            continue proximoElemento;
                        }
                    }
                }
            }
        }
        for (int r : repetidos) {
            System.out.println(r);
        }       }
    }

