package main

import "fmt"

func main() {
	// variables
	helloMessage := "Hello"
	wordMessage := "World"

	// println
	fmt.Println(helloMessage, wordMessage)
	fmt.Println(helloMessage, wordMessage)

	// Printf
	name := "Hugo"
	courses := 500
	fmt.Printf("%s has more %d courses\n", name, courses)
	fmt.Printf("%v has more %d courses\n", name, courses)

	// sprintF
	message := fmt.Sprintf("%s has more %d courses\n", name, courses)
	fmt.Println(message)

	// data type
	fmt.Printf("helloMessage: %T \n", helloMessage)
	fmt.Printf("courses: %T", courses)
}
