# Ascending and Descending Numbers

Print numbers in ascending or descending order. The user must enter a number, then he must enter if he wants to print the numbers in ascending or descending order. If the user chooses ascending, the numbers will be printed from the number 0 to the number entered, otherwise the numbers will be printed descending from the number entered to the number 0.To solve this challenge remember to use the For(Para) loop.

    Algoritmo ascendingDescending
      Escribir"=== Ascender y Descender === "
      Escribir "Ingrese un numero"
      Leer num

      Escribir "Operaciones disponibles"
      Escribir "1. Imprimir en Ascendente"
      Escribir "2. Imprimir en Descendente"

      Escribir "Ingrese Operacion a Ejecutar"
      Leer ope

      Segun ope Hacer
        1:
          Para i <- 0 Hasta num Con Paso 1 Hacer
            Imprimir ConvertirATexto(i)
          Fin Para
        2:
          Para i <- num Hasta 0 Con Paso -1 Hacer
            Imprimir ConvertirATexto(i)
          Fin Para
        De Otro Modo:
          Imprimir "Operacion Incorrecta"
      Fin Segun
    FinAlgoritmo
