Simple calculator with Switch

For this challenge you will be performing a simple calculator using Switch (Segun), this calculator can perform the following operations:

	1 Sum (+)
	2 Subtract (-)
	3 Multiplication (*)
	4 Division (/)



	Algoritmo calcSwitch
		Escribir "Enter the first number"
		Leer num1
	
		Escribir "Enter the first number"
		Leer num2
	
		Escribir "Enter the Operation +, -, /, *"
		Leer ope
	
		Segun ope Hacer
			"+":
				Imprimir  "resultado: " + ConvertirATexto(num1 + num2)
			"-":
				Imprimir  "resultado: " + ConvertirATexto(num1 - num2)
			"/":
				Imprimir  "resultado: " + ConvertirATexto(num1 / num2)
			"*":
				Imprimir  "resultado: " + ConvertirATexto(num1 * num2)
			De Otro Modo:
				Imprimir  "Operacion no valida"
		Fin Segun
	
	FinAlgoritmo
