import java.util.Random;
import java.util.concurrent.TimeUnit;

public class provalilo {
    public static void main(String[] args) {

        long inicio = System.nanoTime();
        ordenarVetor(CriarVetorDMaleatorio(1000000));
        long duracao = System.nanoTime() - inicio;
        double segundos = TimeUnit.SECONDS.convert(duracao, TimeUnit.NANOSECONDS);
        double milisegundos = TimeUnit.MILLISECONDS.convert(duracao, TimeUnit.NANOSECONDS);
        double minutos = TimeUnit.MINUTES.convert(duracao, TimeUnit.NANOSECONDS);

        System.out.printf("Nanosegundos: %d ns\n", duracao );
        System.out.printf("Milisegundos: %f ms\n", milisegundos );
        System.out.printf("Segundos: %f s\n", milisegundos/1000);
        System.out.printf("Minutes: %f m\n", milisegundos/60000);
    }

    static void ordenarVetor(int[] vetor) {
        for (int i = 0; i < vetor.length; i++) {
            int menor = Integer.MAX_VALUE;
            int posicao = i;
            for (int j = i; j < vetor.length; j++) {
                if (vetor[j] < menor) {
                    menor = vetor[j];
                    posicao = j;
                }
            }
        }
    }    // ordenado
    static int[] CriarVetorDMordenado(int tamanho){
        int[] vetor = new int[tamanho];
        for (int i = 0; i < vetor.length; i++){
            vetor [i]= i;
        }
        return vetor;
    }
        // Decrescente
    static int [] CriarVetorDMordemDecrescente(int tamanho){
        int[] vetor = new int[tamanho];
        for(int i = 0; i < vetor.length; i++){
            vetor[i] = vetor.length - i;
        }
        return vetor;
    }

        // aleatório
 static int [] CriarVetorDMaleatorio(int tamanho){
        int[] vetor = new int[tamanho];
        // preencher o vetor

        for(int i = 0; i < vetor.length; i++){
            vetor[i] = new Random().nextInt();
        }
        return vetor;
    }

}