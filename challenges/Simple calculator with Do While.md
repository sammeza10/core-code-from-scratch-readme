# Simple calculator with Do While

use the simple calculator that we made in the challenge 02 but now adding the functionality to perform a calculation again without finishing the program. The program should ask us if we want to use another operation and if the user answers yes then we can perform a new operation. To solve this challenge remember to use Do while (Repetir Hasta Que).

    Algoritmo calcSwitch
      Repetir
      Escribir "Enter the first number"
      Leer num1

      Escribir "Enter the second number"
      Leer num2

      Escribir "Enter the Operation +, -, /, *"
      Leer ope

      Segun ope Hacer
        "+":
          Imprimir  "result: " + ConvertirATexto(num1 + num2)
        "-":
          Imprimir  "result: " + ConvertirATexto(num1 - num2)
        "/":
          Imprimir  "result: " + ConvertirATexto(num1 / num2)
        "*":
          Imprimir  "result: " + ConvertirATexto(num1 * num2)
        De Otro Modo:
          Imprimir  "Operation not valid"
      Fin Segun
      Imprimir "Would you like to do another operation? Yes/No"
      Leer continuar
    Mientras Que continuar == "Yes" | continuar == "Yes"
      Escribir "Bye"
    FinAlgoritmo
