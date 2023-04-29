# Toss coin

From the data we receive first a name and a value, then another name and another value, using the built-in function aleatorio() we simulate the flip of a coin, We must return the name of the winner in capital letters and the value I win, to avoid cheating, if a player puts a value of zero or negative, the opponent automatically wins, in case both cheat, "game canceled" is returned.

    Algoritmo juego_moneda

      Definir nombre1, nombre2 Como Caracter
      Definir valor1, valor2, valor_ganado Como Real
      Definir ganador Como Caracter

      Escribir "Juego de la moneda: "
      Escribir "Escribe el nombre del Jugador 1: "
      Leer nombre1
      Escribir "Introduzca un valor: "
      Leer valor1

      Escribir "Escribe el nombre del Jugador 2: "
      Leer nombre2
      Escribir "Introduzca un valor: "
      Leer valor2

      Si valor1 <= 0 Entonces 
        ganador <- nombre2
        valor_ganado <- valor2
      Sino Si valor2 <= 0 Entonces 
          ganador <- nombre1
          valor_ganado <- valor1
        Sino 
          Escribir "Lanzando la moneda..."
        FinSi

          Si aleatorio(0, 1) = 0 Entonces 
            ganador <- nombre1
            valor_ganado <- valor1
          Sino 
            ganador <- nombre2
            valor_ganado <- valor2
          FinSi
        FinSi

        Escribir "El ganador es: ", Mayusculas(ganador)
        Escribir "Valor ganado: ", valor_ganado

    FinAlgoritmo
