# Multiplication Tables

Create a program to calculate the multiplication tables for a given number using While (Mientras). The user must enter a number and then the multiplication table for the number must be printed.

    Algoritmo tablas
      Escribir  "===== Multiplication tablas ====="
      Escribir "Ingrese la tabla a calcular"
        Leer num
      i = 1 

      Mientras i <= 10 Hacer
        Escribir num, "x", i, "=", num * i
        i = i + 1
      Fin Mientras
    FinAlgoritmo
