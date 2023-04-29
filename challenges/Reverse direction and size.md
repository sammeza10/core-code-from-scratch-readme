# Reverse direction and size

Create a function called ReverseDirectionAndSize that takes some text as a parameter and reverses it, eg: "Hello" -> "olleH" and also reverses the letters if they are uppercase to lowercase and if they are lowercase to uppercase, it should do something. like this:

"HelLO" --> "olLEh"

"Leonardo" --> "ODRANOEl"

"Text" --> "TXEt"

    Funcion resultado <- revertir (text)
      Definir resultado Como Caracter;
      resultado = "";
      Para i = Longitud(text) Hasta 0 Con Paso -1 Hacer
        letras = Subcadena(text,i,i);
        SI letras = Mayusculas(letras) Entonces
          letter = Minusculas(letras)
        SiNo
          letter = Mayusculas(letras)
        FinSi
        resultado = Concatenar(resultado, letras)
      FinPara
    Fin Funcion

    Algoritmo ejercicioRevertir
      Imprimir revertir("Hello")
    FinAlgoritmo
