# Cashier

create a function called "cashier" that pretends to be a panel of a bank should display the text: "select an option:

a. to deposit. 
b. withdraw.
c. go out."

And have a value called balance that will return when finished and will print it on the screen, its initial value will be 1000. You must repeat the menu until you select the option 'c'

if we select 'a' it invokes another function called 'deposit' that will display a text on the screen that will say 'how much do you want to deposit:' it will add that value to the balance and end the function.

if we select 'b' it invokes another function called 'withdraw' that will display a text on the screen that will say 'how much do you want to withdraw:' it will subtract that value from the balance and end the function.

"select an option: a. to deposit. b. withdraw. c. go out."

a -->

"how much do you want to deposit:"

500 -->

"select an option: a. to deposit. b. withdraw. c. go out."

b -->

"how much do you want to withdraw:"

1400 -->

"select an option: a. to deposit. b. withdraw. c. go out."

c -->

100


    Funcion balance <- cashier ()
      Definir balance Como Real
      balance = 1000
      Repetir
        Imprimir "selecione una opcion:"
        Imprimir "a. depositar"
        Imprimir "b. retirar."
        Imprimir "c. salir."
        leer opcion
        Si opcion = 'a' Entonces
          balance = balance + depositar()
        FinSi
        Si opcion = 'b' Entonces
          balance = balance - retirar()
        FinSi
      Mientras Que opcion = "a" | opcion = "b"
    Fin Funcion

    Funcion valor <- depositar()
      Imprimir "Cuanto quiere depositar:"
      leer valor
    FinFuncion

    Funcion valor <- retirar()
      Imprimir "Cuanto quiere retirar:"
      leer valor
    FinFuncion

    Algoritmo cajero
      Imprimir cashier()
    FinAlgoritmo
