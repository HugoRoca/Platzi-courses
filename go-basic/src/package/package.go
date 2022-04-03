package _package

import "fmt"

// CarPublic Car with public access
type CarPublic struct {
	Brand string
	Year  int
}

type carPrivate struct {
	brand string
	year  int
}

// PrintMessage print message on console
func PrintMessage() {
	fmt.Println("Hi from another file")
}
