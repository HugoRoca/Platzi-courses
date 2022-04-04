package main

import "fmt"

// un conducto que se manejar un tipo de dato

// chan<- enter data
// <-chan output data
func say(text string, c chan<- string) {
	c <- text
}

func main() {
	c := make(chan string, 1)

	fmt.Println("Hello")

	go say("Bye", c)

	fmt.Println(<-c)
}
