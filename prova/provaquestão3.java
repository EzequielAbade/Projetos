package prova;

class questão3{
  
    public static void main(String args[])
    {
        int esparsa[][]
            = { { 2, 0, 8 }, { 0, 0, 4 }, { 6, 0, 0 } };
  
            
            System.out.println("temos uma matriz 3x3: ");
            System.out.println("2, 0, 8 \n0, 0, 4\n6, 0, 0 ");
            int linhas = 3;
            int colunas = 3;
            int counter = 0;
  
        for (int i = 0; i < linhas; ++i)
            for (int j = 0; j < colunas; ++j)
                if (esparsa[i][j] == 0)
                    ++counter;
  
        if (counter > ((linhas * colunas) / 2))
            System.out.println("É uma matriz esparsa. ");
        else
            System.out.println("Não é uma matriz esparsa. ");
            
    } 
} 