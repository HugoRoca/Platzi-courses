package main

import "fmt"

type pcTwo struct {
	ram   int
	brand string
	disk  int
}

func (myPC pcTwo) String() string {
	return fmt.Sprintf("I have %d GB RAM, %d DB disco and It is a %s", myPC.ram, myPC.disk, myPC.brand)
}

func main() {
	myPC := pcTwo{ram: 16, brand: "HP", disk: 120}

	fmt.Println(myPC)
}
