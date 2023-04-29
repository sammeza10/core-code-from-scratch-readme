# Distance to zero

Make a program that asks for 5 values and also allows us to know which one is furthest from zero, once obtained it returns that number (the numbers can be negative), showing only the integer part of the number.

    Algoritmo lejosDeCero
      Escribir "Escribe un numero"
      Leer lejos

      Para conteo <-1 Hasta 4 Con Paso 1 Hacer
        Escribir "Escribe un numero" 
        Leer numero
        si Abs(numero) > Abs(lejos)
          lejos = numero
        FinSi
      Fin Para
      Imprimir "numero mas lejano del cero: ", Trunc(lejos)
    FinAlgoritmo
