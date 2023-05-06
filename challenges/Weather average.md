# Weather average

Write an algorithm that loops indefinitely until 'x' is entered which will calculate an average of the weather, note that for each value entered it should ask if it is fahrenheit or celsius, then ask for the value. add everything up and divide by the number of values entered. The result must be returned in celsius, have a function that, in case fahrenheit is entered, transforms it to celsius in order to add them.

    Funcion celsius <- fahrenheitACelsius (fahrenheit)
      Definir celsius Como Real;
      celsius = (fahrenheit - 32 ) / 1.8
    Fin Funcion

    Algoritmo clima
      i= 0;
      total = 0;
      Repetir
        Imprimir "selecione una opcion:";
        Imprimir "a. ingrese temperatura en celsius.";
        Imprimir "b. ingrese temperatura en fahrenheit.";
        Imprimir "x. salir.";
        leer opcion
        Si opcion = "a" | opcion = "b" Entonces
          leer grados
          i = i + 1;
        FinSi
        Si opcion = 'a' Entonces
          total = total + grados;
        FinSi
        Si opcion = 'b' Entonces
          total = total + fahrenheitACelsius(grados);
        FinSi
      Mientras Que opcion = "a" | opcion = "b"
      Imprimir total / i;
    FinAlgoritmo
