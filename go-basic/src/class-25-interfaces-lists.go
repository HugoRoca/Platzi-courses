package main

import "fmt"

type figure2D interface {
	area() float64
}

type square struct {
	base float64
}

type rectangle struct {
	base   float64
	height float64
}

func (c square) area() float64 {
	return c.base * c.base
}

func (r rectangle) area() float64 {
	return r.base * r.height
}

func calculate(f figure2D) {
	fmt.Println("Area:", f.area())
}

func main() {
	mySquare := square{base: 21}
	myRectangle := rectangle{base: 4, height: 5}

	calculate(mySquare)
	calculate(myRectangle)

	// Interface list
	myInterface := []interface{}{"hi", 12, 5.5}
	fmt.Println(myInterface...)
}
