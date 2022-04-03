package main

import (
	"fmt"
	"strings"
)

func isPalindromo(text string) {
	newText := strings.ToLower(text)
	var textReverse string

	for i := len(newText) - 1; i >= 0; i-- {
		textReverse += string(newText[i])
	}

	if newText == textReverse {
		fmt.Println("is correct!")
	} else {
		fmt.Println("is incorrect!")
	}
}

func main() {
	//slice := []string{"hi", "hugo", "how are you?"}
	//
	//for i := range slice {
	//	fmt.Println(i)
	//}

	//
	isPalindromo("Ama")
}
