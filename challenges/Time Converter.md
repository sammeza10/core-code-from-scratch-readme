# Time Converter

Create a function called timeConverter that receives a positive number of seconds and returns a string based on the number. "Days: 1, Hours: 5, Minutes: 40 and seconds: 5"

4000 --> "days: 0, hours: 1, minutes: 6, and seconds: 4"

40000 --> "days: 0, hours: 11, minutes: 6, and seconds: 4"

150000 --> "days: 1, hours: 17, minutes: 40, and seconds: 0"

    Funcion resultado <- timeConverter (num)
      Definir resultado Como Caracter
      Definir dias, horas, minutos, segundos Como Entero
      segundos = num % 60
      minutos = Trunc(num / 60) % 60
      horas =  Trunc(num / 3600) % 24
      dias = Trunc(num / 86400)

      resultado = Concatenar("dias: ", ConvertirATexto(dias))
      resultado = Concatenar(resultado, ", horas: ")
      resultado = Concatenar(resultado, ConvertirATexto(horas));
      resultado = Concatenar(resultado, ', minutos: ');
      resultado = Concatenar(resultado, ConvertirATexto(minutos));
      resultado = Concatenar(resultado, ', y segundos: ');
      resultado = Concatenar(resultado, ConvertirATexto(segundos));

    FinFuncion

    Algoritmo exampleTimeConverter
      Imprimir timeConverter(4000)
    FinAlgoritmo
