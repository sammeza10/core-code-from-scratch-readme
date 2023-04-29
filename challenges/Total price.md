# Total price

Create a function called TotalPrice that takes 2 parameters, price and VAT, and returns the price including VAT. if the price exceeds 3000 a 10 percent discount is made on the total price.

    Funcion valor <- precioTotal (precio, vat)
      Definir valor Como Real;
      SI precio > 3000 Entonces
        valor = ( precio + (precio/100*vat) ) / 100*90
      SiNo
        valor = ( precio + (price/100*vat) )
      FinSi
    Fin Funcion

    Algoritmo precioTotalE
      Imprimir precioTotal(5000,21)
    FinAlgoritmo
