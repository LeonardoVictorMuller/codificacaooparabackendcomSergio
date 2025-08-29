import java.util.Scanner;

public class index {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite uma palavra:");
        String palavra = sc.nextLine();

        // transforma em array de caracteres
        char[] letras = palavra.toCharArray();

        // percorre cada caractere e mostra o valor em hexadecimal
        for(int i = 0; i < letras.length; i++){
            System.out.println((char)(letras[i]+3));
        }

        sc.close();
    }
}
