# Compare distances

Create a function called compareDistances that asks for 5 numbers, these can be positive or negative, add the positives with positives and negatives with negatives, the function should return true if there is more distance to 0 with positives or false if the distance is greater with negatives .

4, 12 , 100, 8, -60 --> true

40, 120 , 10, -80, -91 --> false

    Funcion resultado <- compareDistances ()
      Definir resultado Como Logico;
      Definir negativo, positivo Como Real;
      negativo = 0;
      positivo = 0;
      Para i = 1 Hasta 5 Con Paso 1 Hacer
        Escribir "Escriba un numero"
        leer num
        SI num > 0 Entonces
          positivo = positivo + num;
        SiNo
          negativo = negativo + num;
        FinSi
      FinPara
      resultado = positivo > Abs(negativo)
    Fin Funcion

    Algoritmo exampleCompareDistances
      Imprimir compareDistances()
    FinAlgoritmo
