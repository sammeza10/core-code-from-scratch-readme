# Throw dice

Make a program that simulates the roll of 2 dice 10 times, and display for each roll the values of the two dice separated by a space, in case the 2 dice throw the same value in addition to the result, add a string to the ending that says "the dice are the same".

    Algoritmo dados
      definir dado1, dado2 Como Entero

      Para dado<-1 Hasta 10 Con Paso 1 Hacer
        dado1 = Azar(6)
        dado2 = Azar(6)

        si dado1 == dado2 Entonces
          Imprimir dado1, " ", dado2, " los dados son iguales"
        SiNo
          Imprimir dado1, " ", dado2
        FinSi

      Fin Para


    FinAlgoritmo
