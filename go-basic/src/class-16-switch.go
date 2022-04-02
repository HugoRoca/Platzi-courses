package main

import "fmt"

func main() {
	switch module := 5 % 2; module {
	case 0:
		fmt.Println("is PAR")
	default:
		fmt.Println("is NOT PAR")
	}

	// SWITCH without condition
	value := 200

	switch {
	case value > 100:
		fmt.Println("is greater than hundred")
	case value < 0:
		fmt.Println("is less than zero")
	default:
		fmt.Println("no condition")
	}
}
