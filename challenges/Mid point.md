# Mid point

write a function called midpoint that given 2 values (can be negative) does not return the value of the midpoint between them

-50,50 --> 0

40, 80 --> 60


	Funcion resultado <- midPoint (num1,num2)
		Si num1 > 0 Entonces
			Si num2 > 0 Entonces
				SI num1 > num2 Entonces
					resultado = num2 + ((num1 - num2) / 2); 
				SiNo
					resultado = num1 + ((num2 - num1) / 2);
				FinSi
			SiNo
				resultado = num1 - ( (num1 + Abs(num2))/2);
			FinSi
		SiNo
			SI num2 > 0 Entonces
				resultado = num1 + ( (num2 + Abs(num1))/2)	;
			SiNo
				SI Abs(num1) > Abs(num2) Entonces
					resultadod = num1 + ((Abs(num1) - Abs(num2)) / 2); 
				SiNo
					resultado = num2 + ((Abs(num2) - Abs(num1)) / 2); 
				FinSi
			FinSi
		FinSi

	Fin Funcion

	Algoritmo medio
		Imprimir midPoint(40,80)
		Imprimir midPoint(10,50)
		Imprimir midPoint(20,30)
	FinAlgoritmo
