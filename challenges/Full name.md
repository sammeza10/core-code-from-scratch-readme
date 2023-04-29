# Full name


Make a program that takes a first name and a last name, then returns a string with both values with the first letter uppercase and the rest lowercase.


    Algoritmo mayusculasMinusculas

      Imprimir "escribir un nombre"
      Leer firstName
      Imprimir " Escribir un apellido"
      Leer lastName

      primeraLetraNombre = Mayusculas(Subcadena(firstName, 0,0))
      restoNombre = Minusculas(Subcadena(firstName, 1,Longitud(firstName)))

      primeraLetraApellido = Mayusculas(Subcadena(lastName, 0,0))
      restoLastName = Minusculas(Subcadena(lastName, 1, Longitud(lastName)))

      Imprimir "Hola " primeraLetraNombre restoNombre " " primeraLetraApellido restoLastName


    FinAlgoritmo

