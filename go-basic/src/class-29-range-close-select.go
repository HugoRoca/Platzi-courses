package main

import "fmt"

func message(text string, c chan string) {
	c <- text
}

func main() {
	c := make(chan string, 2)
	c <- "Message 1"
	c <- "Message 2"

	fmt.Println(len(c), cap(c))

	// Range & close
	close(c)

	// c <- "Message 3"

	for message := range c {
		fmt.Println(message)
	}

	// Select
	email1 := make(chan string)
	email2 := make(chan string)

	go message("Message 1", email1)
	go message("Message 2", email2)

	for i := 0; i < 2; i++ {
		select {
		case m1 := <-email1:
			fmt.Println("email 1", m1)
		case m2 := <-email2:
			fmt.Println("email 2", m2)
		}
	}
}
