Simple calculator with Switch

For this challenge you will be performing a simple calculator using Switch (Segun), this calculator can perform the following operations:

1 Sum (+)
2 Subtract (-)
3 Multiplication (*)
4 Division (/)



	Algoritmo calcSwitch
		Escribir "Enter the first number"
		Leer num1
	
		Escribir "Enter the second number"
		Leer num2
	
		Escribir "Enter the Operation +, -, /, *"
		Leer ope
	
		Segun ope Hacer
			"+":
				Imprimir  "result: " + ConvertirATexto(num1 + num2)
			"-":
				Imprimir  "result: " + ConvertirATexto(num1 - num2)
			"/":
				Imprimir  "result: " + ConvertirATexto(num1 / num2)
			"*":
				Imprimir  "result: " + ConvertirATexto(num1 * num2)
			De Otro Modo:
				Imprimir  "Invalid Operation"
		Fin Segun
	
	FinAlgoritmo 
