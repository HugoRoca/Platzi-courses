package main

import "fmt"

func main() {
	// Suma
	x := 10
	y := 40
	result := x + y
	fmt.Println("Suma", result)

	// Resta
	result = x - y
	fmt.Println("resta", result)

	// Multiplicacion
	result = x * y
	fmt.Println("multiplicacion", result)

	// Division
	result = y / x
	fmt.Println("division", result)

	// Module
	result = y % x
	fmt.Println("module", result)

	// incremental
	x++
	fmt.Println("Incremental", x)

	// Decremental
	x--
	fmt.Println("Decremental", x)

	// Rectángulo
	baseRectangulo := 20
	alturaRectangulo := 10

	areaRectangulo := baseRectangulo * alturaRectangulo

	fmt.Println("El Area del Rectángulo es :", areaRectangulo)

	// Circulo : AreaCirculo = pi por radio al cudrado
	const PI float64 = 3.14 // Constant
	var radioCirculo float64 = 10

	areaCirculo := PI * radioCirculo * radioCirculo

	fmt.Println("El Area del Circulo es :", areaCirculo)

	// Trapecio
	var baseUno float64 = 6
	var baseDos float64 = 15
	var alturaTrapecio float64 = 25

	areaTrapecio := ((baseUno + baseDos) * alturaTrapecio) / 2

	fmt.Println("El Area del Trapecio es :", areaTrapecio)
}
