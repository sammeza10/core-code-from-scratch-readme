# Greetings

Create a program that prints a greeting based on an hour entered. The program should do the following:

    Print Buenos dias! if the hour is from 0 to 12
    Print Buenas tardes! if the hour is from 13 to 18
    Print Buenas noches! if the hour is from 19 to 23
    Ask the user if he wants to perform another greeting. If the answer is Si, the program must start again.
    At the end of the program, print out the number of times the program has greeted.


	Algoritmo saludo

		Imprimir '===== Saludo ====='
		Definir continuar Como Cadena
		Definir saludos Como Entero

		saludos <- 0
		continuar <- 'Si'

		Mientras continuar == 'Si' Hacer
			Imprimir 'Ingrese hora actual (0-23):'
			Leer hora
			Si hora <= 12 Entonces
				Imprimir 'Buenas dias!'
			SiNo
				Si hora <= 18 Entonces
					Imprimir 'Buenas tardes!'
				SiNo
					Imprimir 'Buenas noches!'
				Fin Si
			Fin Si

			saludos <- saludos + 1

			Imprimir 'Desea continuar ? Si/No'
			Leer continuar
		Fin Mientras

		Imprimir 'Cantidad de Saludos realizados: ' + ConvertirATexto(saludos)
	FinAlgoritmo
