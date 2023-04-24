# Multiplication Tables with For

Create a program to calculate the multiplication tables for a given number using the For(Para) loop. The user must enter a number and then the multiplication table for the number must be printed.

    Algoritmo multiTables
      Escribir " ==== Tablas de Multiplicacion ===="
      Escribir "Introduzca la tabla a multiplicar"
      Leer tabla

      Imprimir "la tabla de: " + ConvertirATexto(tabla)
      Para i <- 1 Hasta 10 Con Paso 1 Hacer
        Imprimir ConvertirATexto(tabla) ' *  ' + ConvertirATexto(i) + ' = ' ConvertirATexto(tabla * i)
      Fin Para
    FinAlgoritmo
