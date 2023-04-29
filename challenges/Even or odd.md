# Even or odd

Request a number from 1 to 50, if the number is not between those values, report the error and request it again until you get a valid number, then it shows on the screen all the numbers from 1 to that number, if the number is even it only shows the even numbers, if it is odd it only shows the odd ones


    Algoritmo parImpar

      Repetir
        Escribir "Ingrese un numero entre 1 y 50"
        Leer numero
        si numero < 1 | numero > 50 Entonces
          Imprimir "Numero Invalido"
        FinSi
      Mientras Que numero < 1 | numero > 50

      par = numero % 2 = 0

      Para conteo <-1 Hasta numero Con Paso 1 Hacer
        Si conteo % 2 = 0 & par Entonces
          Imprimir conteo
        FinSi
        si conteo % 2 = 1 & ~(par) Entonces
          Imprimir conteo
        FinSi
      Fin Para
    FinAlgoritmo

