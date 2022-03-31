package main

import "fmt"

func main() {
	// Declaration constants
	const pi float64 = 3.14
	const pi2 = 3.14

	// fmt.Println(pi, pi2)
	fmt.Println("pi", pi)
	fmt.Println("pi2", pi2)

	// Integer declarations
	base := 12
	var tall int = 14
	var area int

	fmt.Println(base, tall, area)

	// Zero values
	var a int
	var b float64
	var c string
	var d bool
	fmt.Println(a, b, c, d)

	// Square area
	const squareBase = 10
	squareArea := squareBase * squareBase
	fmt.Println("Square area is:", squareArea)
}
