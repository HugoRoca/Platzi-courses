package main

import (
	"fmt"
	_package "src/package/src/package"
)

func main() {
	var myCar _package.CarPublic
	myCar.Brand = "Ferrari"
	myCar.Year = 2022

	fmt.Println(myCar)

	_package.PrintMessage()
}
