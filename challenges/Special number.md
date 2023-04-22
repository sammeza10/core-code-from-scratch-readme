# Special number

create the code that follows the following logic, if the given number is 100, take this number as special and show the following message: "This is a special number!", but if the number is less than 1000, multiple of 10 and different from 100, you must show the following message: "This number is almost special". if none of the given conditions are met show the following message: "Just a regular number". Another developer was trying to program the logic, but apparently couldn't, you need to fix the code to work properly

	Algoritmo numeroEspecial
		Leer num
		Si num == 100 Entonces
			Imprimir 'This is a special number'
		SiNo
			Si (num < 1000) & (num % 10 == 0) Entonces
				Imprimir  'This number is almost special'
			SiNo
				Imprimir 'Just a regular number'
			FinSi
		FinSi
		FinAlgoritmo
