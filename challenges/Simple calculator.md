# Simple calculator


    Sum (+)
    Subtract (-)
    Multiplication (*)
    Division (/)



	Algoritmo calculadora
		Escribir "Ingrese primer numero"
		Leer num1
	
		Escribir "Ingrese segundo numero"
		Leer num2
	
		Escribir "Ingrese una operacion: +, -, /, *"
		Leer ope
	
		si ope == "+" Entonces
			resultado = num1 + num2
			Escribir resultado
		FinSi
	
		si ope == "-" Entonces
			resultado = num1 - num2
			Escribir resultado
		FinSi
	
		si ope == "/" Entonces
			resultado = num1 / num2
			Escribir resultado
		FinSi
	
		si ope == "*" Entonces
			resultado = num1 + num2
			Escribir resultado
		FinSi
	
		si ope != "+" | signo != "-" | signo != "/" | signo != "/" Entonces
			Escribir "Operacion invalida"
		FinSi
	
		FinAlgoritmo
