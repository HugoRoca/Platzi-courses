package main

import "fmt"

func main() {
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	fmt.Println("\n")

	counter := 0
	for counter < 10 {
		fmt.Println(counter)
		counter++
	}

	// Counter forever
	counterForever := 0
	for {
		fmt.Println(counterForever)
		counterForever++
	}
}
