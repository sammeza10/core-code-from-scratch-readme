# Average sales and commission

Make a program that asks how many sales the seller had, Once the number of sales is entered, ask for the value of each sale until all are entered, then return as a result the average value of sales, and the commission that the seller will take, If the seller had more than 5 sales, his commission will be 15% of the total value of the sales, if he sold 5 or less, his commission will be only 10%.



    Algoritmo ventas

      Escribir "Ingrese el total de ventas a calcular"
      Leer totalVentas

      gananciaTotal = 0

      Para venta <-1 Hasta totalVentas Con Paso 1 Hacer
        Escribir "Ingrese el valor de la venta: ", venta
        Leer total
        gananciaTotal = gananciaTotal + total
      Fin Para

      promedio = gananciaTotal / totalVentas
      Imprimir "Promedio de venta es: ", promedio

      Si totalVentas < 5 Entonces
        Imprimir "Comision de ventas: ", gananciaTotal * 0.10
      SiNo
        Imprimir "Comision de ventas: ", gananciaTotal * 0.15
      FinSi

    FinAlgoritmo
