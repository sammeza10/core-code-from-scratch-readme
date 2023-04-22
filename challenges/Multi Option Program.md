# Multi Option Program

For this challenge you will create a program with multiple options using Switch (Segun), the options available are the following:

Sum two numbers.

Print the day of the week given the day number.

Print the length of a given text.


    Algoritmo multiple
      Escribir  " ====== Multiples Opciones ====== "
      Escribir "Opciones disponibles"
      Escribir "1. Sumar dos numeros"
      Escribir "2. Imprimir dia de la semana"
      Escribir "3. Calcular logitud de texto"
      Escribir "Ingrese la opcion seleccionada 1-3"
      Leer opc

      Segun opc Hacer
        1:
          Escribir "Opcion 1 sumar"
          Escribir "Ingrese el primer numero"
          Leer num1
          Escribir "Ingrese el segundo numero"
          Leer num2
          Imprimir "resultado: " + ConvertirATexto(num1 + num2)
        2:
          Escribir "Opcion 2 dia de la semana"
          Escribir "ingrese el dia de la semana en numero del 1 al 7"
          Leer dia
          Segun dia Hacer
            1:
              Imprimir  "Lunes"
            2:
              Imprimir " Martes"
            3:
              Imprimir "Miercoles"
            4:
              Imprimir "Jueves"
            5:
              Imprimir "Viernes"
            6:
              Imprimir "Sabado"
            7:
              Imprimir "Domingo"
            De Otro Modo:
              Imprimir "Incorrecto"
          Fin Segun
        3:
          Escribir "Opcion 3 longitud"
          Escribir "Ingrese un texto"
          Leer palabra
          Imprimir "resultado: " + ConvertirATexto(Longitud(palabra))
        De Otro Modo:
          Escribir "Opcion incorrecta"
      Fin Segun
    FinAlgoritmo
