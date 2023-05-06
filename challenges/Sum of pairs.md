# Sum of pairs

write a function called sumOfPairs that asks for a number from 1 to 100 indefinitely, if a negative number or greater than 100 is entered, it stops asking for more numbers and returns the sum of all the even numbers entered.

4, 12 , 100, 11, -60 --> 116

40, 121 --> 40

    Funcion resultado <- sumOfPairs ()
      Definir resultado Como Real;
      Definir suma Como Real;
      suma = 0;
      Repetir
        Escribir "Escriba un numero entre 1 y 100"
        leer num
        SI  num < 1  | num > 100 Entonces
          Imprimir 'Numero Invalido'
        SiNo
          SI num % 2 = 0
            suma = suma + num;
          FinSi
        FinSi
      Mientras Que num >= 1  & num  <= 100
      resultado = suma;
    Fin Funcion

    Algoritmo sumaPares
      Imprimir sumOfPairs()
    FinAlgoritmo
